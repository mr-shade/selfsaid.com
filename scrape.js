const axios = require('axios');
const cheerio = require('cheerio');
const xml2js = require('xml2js');
const TurndownService = require('turndown');
const fs = require('fs-extra');
const path = require('path');
const slugify = require('slugify');
const url = require('url');

const BASE_URL = 'https://seffsaid.com';
const OUTPUT_DIR = path.join(__dirname, 'content'); // Moved to content for Next.js
const POSTS_DIR = path.join(OUTPUT_DIR, 'posts');
const PAGES_DIR = path.join(OUTPUT_DIR, 'pages');
const IMAGES_DIR = path.join(__dirname, 'public', 'images'); // Moved to public/images

const SITEMAPS = [
    'https://seffsaid.com/post-sitemap.xml',
    'https://seffsaid.com/page-sitemap.xml',
    // 'https://seffsaid.com/post_tag-sitemap.xml', // Tags usually just list posts, we scrape posts directly
    // 'https://seffsaid.com/author-sitemap.xml'
];

const CONCURRENCY_LIMIT = 5;
const RETRY_LIMIT = 3;
const DELAY_MS = 500;

// Initialize Turndown Service
const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function ensureDirs() {
    await fs.ensureDir(POSTS_DIR);
    await fs.ensureDir(PAGES_DIR);
    await fs.ensureDir(IMAGES_DIR);
}

async function fetchSitemap(sitemapUrl) {
    try {
        console.log(`Fetching sitemap: ${sitemapUrl}`);
        const response = await axios.get(sitemapUrl);
        const parser = new xml2js.Parser();
        const result = await parser.parseStringPromise(response.data);

        let urls = [];

        if (result.sitemapindex && result.sitemapindex.sitemap) {
            for (const sitemap of result.sitemapindex.sitemap) {
                const subSitemapUrl = sitemap.loc[0];
                urls = urls.concat(await fetchSitemap(subSitemapUrl));
            }
        }
        else if (result.urlset && result.urlset.url) {
            urls = result.urlset.url.map(entry => entry.loc[0]);
        }

        return urls;
    } catch (error) {
        console.error(`Error fetching sitemap ${sitemapUrl}:`, error.message);
        return [];
    }
}

async function downloadImage(imageUrl, referer, slug, retryCount = 0) {
    try {
        if (!imageUrl) return '';
        if (imageUrl.startsWith('/')) imageUrl = BASE_URL + imageUrl;

        // Skip non-image assets or data URIs
        if (!imageUrl.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) || imageUrl.startsWith('data:')) {
            return imageUrl;
        }

        const parsedUrl = url.parse(imageUrl);
        const filename = path.basename(parsedUrl.pathname);
        const safeFilename = `${slug.substring(0, 50)}-${filename}`.replace(/[^a-zA-Z0-9.-]/g, '_');
        const localPath = path.join(IMAGES_DIR, safeFilename);
        const publicPath = `/images/${safeFilename}`; // Path for Next.js

        if (await fs.pathExists(localPath)) {
            return publicPath;
        }

        await sleep(100);

        const response = await axios({
            method: 'GET',
            url: imageUrl,
            responseType: 'stream',
            headers: {
                'Referer': referer,
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            timeout: 20000
        });

        const writer = fs.createWriteStream(localPath);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', () => resolve(publicPath));
            writer.on('error', (err) => {
                writer.close();
                fs.remove(localPath).catch(() => { });
                reject(err);
            });
        });
    } catch (error) {
        if (retryCount < RETRY_LIMIT) {
            const waitTime = 1000 * Math.pow(2, retryCount);
            // console.warn(`Retry Image ${imageUrl} (${retryCount + 1})`);
            await sleep(waitTime);
            return downloadImage(imageUrl, referer, slug, retryCount + 1);
        }
        // console.warn(`Image Fail: ${imageUrl}`);
        return imageUrl;
    }
}

async function scrapeUrl(pageUrl) {
    const isPage = pageUrl.includes('page-sitemap'); // basic heuristic, better to check structure?
    const type = 'post'; // Default to post for now, logic below refines this

    // Slug generation
    const slug = slugify(pageUrl.split('/').filter(Boolean).pop(), { lower: true, strict: true }) || 'index';

    // Determine output directory based on URL structure or sitemap source
    // For now simple logic: everything to POSTS unless explicitly a "page"
    // Since we are fetching mixed URLs, we'll save eveyrthing to POSTS for simplicity in this step,
    // or distinct based on if it's in page-sitemap.
    // Actually, let's look at the implementation plan: /content/posts and /content/pages.

    let targetDir = POSTS_DIR;
    // We can't easily know if it's a page or post just from URL in recursive fetch.
    // Let's treat everything as a post unless we identify it otherwise.
    // For now, all URLs from sitemaps will go into POSTS_DIR.

    const filePath = path.join(targetDir, `${slug}.md`);

    if (await fs.pathExists(filePath)) {
        console.log(`Skipping: ${slug}`);
        return;
    }

    try {
        await sleep(Math.random() * DELAY_MS);

        const response = await axios.get(pageUrl, {
            headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' },
            timeout: 10000
        });

        const $ = cheerio.load(response.data);

        // Metadata
        const title = $('h1').first().text().trim() || $('title').text().trim();
        const date = $('meta[property="article:published_time"]').attr('content') || new Date().toISOString();
        const author = $('meta[name="author"]').attr('content') || 'Seff Said';
        const description = $('meta[name="description"]').attr('content') || '';

        // Tags
        let tags = [];
        $('meta[property="article:tag"]').each((i, el) => tags.push($(el).attr('content')));

        // Content
        let contentEl = $('.entry-content');
        if (!contentEl.length) contentEl = $('article');
        if (!contentEl.length) contentEl = $('main');

        // Cleanup
        contentEl.find('script, style, .share-buttons, .related-posts, #comments, .post-navigation, .jp-relatedposts').remove();

        // 1. Process Images
        const imgPromises = [];
        contentEl.find('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src) {
                imgPromises.push(async () => {
                    const localPath = await downloadImage(src, pageUrl, slug);
                    $(el).attr('src', localPath);
                    $(el).removeAttr('srcset').removeAttr('loading').removeAttr('sizes');
                });
            }
        });

        const featuredImg = $('meta[property="og:image"]').attr('content');
        let localFeaturedImg = '';
        if (featuredImg) {
            imgPromises.push(async () => {
                localFeaturedImg = await downloadImage(featuredImg, pageUrl, slug);
            });
        }

        await Promise.all(imgPromises);

        // 2. Fix Internal Links
        contentEl.find('a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && href.includes('seffsaid.com')) {
                // Convert absolute to relative
                let newHref = href.replace('https://seffsaid.com', '');
                // Ensure it points to the slug
                // e.g. /some-post/ -> /some-post
                if (newHref.endsWith('/')) newHref = newHref.slice(0, -1);

                // If empty after replace (home), keep as /
                if (!newHref) newHref = '/';

                $(el).attr('href', newHref);
            }
        });

        let markdown = turndownService.turndown(contentEl.html() || '');

        const fileContent = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
author: "${author}"
description: "${description.replace(/"/g, '\\"')}"
tags: [${tags.map(t => `"${t}"`).join(', ')}]
featured_image: "${localFeaturedImg}"
original_url: "${pageUrl}"
---

${markdown}
`;

        await fs.writeFile(filePath, fileContent);
        // console.log(`Saved: ${slug}`);

    } catch (error) {
        console.error(`Error ${pageUrl}: ${error.message}`);
    }
}

async function main() {
    await ensureDirs();

    console.log('Discovering URLs...');
    let allUrls = [];
    for (const sm of SITEMAPS) {
        allUrls = allUrls.concat(await fetchSitemap(sm));
    }
    // De-duplicate
    allUrls = [...new Set(allUrls)];
    console.log(`Found ${allUrls.length} unique URLs.`);

    // Batched processing
    for (let i = 0; i < allUrls.length; i += CONCURRENCY_LIMIT) {
        const batch = allUrls.slice(i, i + CONCURRENCY_LIMIT);
        await Promise.all(batch.map(url => scrapeUrl(url)));
        process.stdout.write(`Progress: ${Math.min(i + CONCURRENCY_LIMIT, allUrls.length)}/${allUrls.length}\r`);
    }

    console.log('\nDone.');
}

if (require.main === module) {
    main();
}
