const axios = require('axios');
const cheerio = require('cheerio');
const xml2js = require('xml2js');
const TurndownService = require('turndown');
const fs = require('fs-extra');
const path = require('path');
const slugify = require('slugify');
const url = require('url');

const BASE_URL = 'https://seffsaid.com';
const OUTPUT_DIR = path.join(__dirname, 'output');
const POSTS_DIR = path.join(OUTPUT_DIR, 'posts');
const IMAGES_DIR = path.join(OUTPUT_DIR, 'images');

const CONCURRENCY_LIMIT = 3; // Reduced concurrency
const RETRY_LIMIT = 3;
const DELAY_MS = 1000; // 1 second delay between requests

// Initialize Turndown Service
const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function ensureDirs() {
    await fs.ensureDir(POSTS_DIR);
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
                if (subSitemapUrl.includes('post-sitemap')) {
                    urls = urls.concat(await fetchSitemap(subSitemapUrl));
                }
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

        const parsedUrl = url.parse(imageUrl);
        const filename = path.basename(parsedUrl.pathname);
        // Sanitize slug and filename to prevent file system errors
        const safeFilename = `${slug.substring(0, 50)}-${filename}`.replace(/[^a-zA-Z0-9.-]/g, '_');
        const localPath = path.join(IMAGES_DIR, safeFilename);
        const relativePath = path.join('../images', safeFilename);

        if (await fs.pathExists(localPath)) {
            return relativePath;
        }

        await sleep(200); // Small throttle for images

        const response = await axios({
            method: 'GET',
            url: imageUrl,
            responseType: 'stream',
            headers: {
                'Referer': referer,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            timeout: 15000
        });

        const writer = fs.createWriteStream(localPath);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', () => resolve(relativePath));
            writer.on('error', (err) => {
                writer.close();
                fs.remove(localPath).catch(() => { }); // Clean up partial file
                reject(err);
            });
        });
    } catch (error) {
        if (retryCount < RETRY_LIMIT) {
            // Exponential backoff
            const waitTime = 1000 * Math.pow(2, retryCount);
            console.warn(`Retry ${retryCount + 1}/${RETRY_LIMIT} for image ${imageUrl} in ${waitTime}ms`);
            await sleep(waitTime);
            return downloadImage(imageUrl, referer, slug, retryCount + 1);
        }
        console.warn(`Failed to download image ${imageUrl}:`, error.message);
        return imageUrl;
    }
}

async function scrapePost(postUrl) {
    const slug = slugify(postUrl.split('/').filter(Boolean).pop(), { lower: true, strict: true }) || 'index';
    const filePath = path.join(POSTS_DIR, `${slug}.md`);

    if (await fs.pathExists(filePath)) {
        // Optional: Check if file size is plausible to verify it wasn't a partial write?
        // For now, let's assume existence means done, which speeds up restarts.
        console.log(`Skipping existing: ${slug}.md`);
        return;
    }

    try {
        // console.log(`Scraping: ${postUrl}`); // Reduced verbosity
        await sleep(Math.random() * DELAY_MS); // Random delay

        const response = await axios.get(postUrl, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            },
            timeout: 10000
        });

        const $ = cheerio.load(response.data);

        // Extract Metadata
        const title = $('h1').first().text().trim() || $('meta[property="og:title"]').attr('content') || '';
        const date = $('meta[property="article:published_time"]').attr('content') || $('.published-date').text().trim() || new Date().toISOString();
        const author = $('meta[name="author"]').attr('content') || $('.author-name').text().trim() || 'Unknown';
        const description = $('meta[name="description"]').attr('content') || '';

        let tags = [];
        $('meta[property="article:tag"]').each((i, el) => tags.push($(el).attr('content')));

        let contentEl = $('.entry-content');
        if (contentEl.length === 0) contentEl = $('article');
        if (contentEl.length === 0) contentEl = $('main');

        contentEl.find('script, style, .share-buttons, .related-posts, #comments, .post-navigation, .jp-relatedposts').remove();

        const imgPromises = [];
        contentEl.find('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src) {
                imgPromises.push(async () => {
                    const localPath = await downloadImage(src, postUrl, slug);
                    $(el).attr('src', localPath);
                    $(el).removeAttr('srcset');
                    $(el).removeAttr('loading');
                });
            }
        });

        const featuredImg = $('meta[property="og:image"]').attr('content');
        let localFeaturedImg = '';
        if (featuredImg) {
            imgPromises.push(async () => {
                localFeaturedImg = await downloadImage(featuredImg, postUrl, slug);
            });
        }

        await Promise.all(imgPromises.map(p => p()));

        let markdown = turndownService.turndown(contentEl.html() || '');

        const fileContent = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
author: "${author}"
description: "${description.replace(/"/g, '\\"')}"
tags: [${tags.map(t => `"${t}"`).join(', ')}]
featured_image: "${localFeaturedImg}"
original_url: "${postUrl}"
---

${markdown}
`;

        await fs.writeFile(filePath, fileContent);
        console.log(`Saved: ${slug}.md`);

    } catch (error) {
        console.error(`Error scraping ${postUrl}:`, error.message);
    }
}

async function main() {
    await ensureDirs();

    const sitemapUrl = 'https://seffsaid.com/sitemap_index.xml';
    const urls = await fetchSitemap(sitemapUrl);

    console.log(`Found ${urls.length} posts. Starting scrape...`);

    // Process in batches
    for (let i = 0; i < urls.length; i += CONCURRENCY_LIMIT) {
        const batch = urls.slice(i, i + CONCURRENCY_LIMIT);
        await Promise.all(batch.map(url => scrapePost(url)));
        process.stdout.write(`Progress: ${Math.min(i + CONCURRENCY_LIMIT, urls.length)}/${urls.length}\r`);
    }

    console.log('\nScraping completed.');
}

if (require.main === module) {
    main();
}
