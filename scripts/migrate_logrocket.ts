import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { parseStringPromise } from 'xml2js';
import slugify from 'slugify';

const SITEMAP_INDEX_URL = 'https://blog.logrocket.com/sitemap.xml';
const OUTPUT_DIR = path.join(process.cwd(), 'websites/logrocket');

// Set a realistic User-Agent to avoid simple blocking
const AXIOS_CONFIG = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
};

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

async function fetchSitemapIndex() {
    // User provided sitemaps directly
    return [
        'https://blog.logrocket.com/sitemap-1.xml',
        'https://blog.logrocket.com/sitemap-2.xml',
        'https://blog.logrocket.com/sitemap-3.xml',
        'https://blog.logrocket.com/sitemap-4.xml',
        'https://blog.logrocket.com/sitemap-5.xml',
        'https://blog.logrocket.com/sitemap-6.xml',
        'https://blog.logrocket.com/sitemap-7.xml'
    ];
}

async function fetchUrlsFromSitemap(sitemapUrl: string) {
    try {
        console.log(`Fetching URLs from ${sitemapUrl}...`);
        const response = await axios.get(sitemapUrl, AXIOS_CONFIG);
        const xml = response.data;
        const result = await parseStringPromise(xml);

        if (!result.urlset || !result.urlset.url) {
            console.warn(`No URLs found in ${sitemapUrl}`);
            return [];
        }

        const urls = result.urlset.url.map((entry: any) => entry.loc[0]);
        console.log(`Found ${urls.length} posts in this sitemap.`);
        return urls;
    } catch (error) {
        console.error(`Error fetching sitemap ${sitemapUrl}:`, error);
        return [];
    }
}

async function processPost(url: string) {
    try {
        const slug = url.split('/').filter(Boolean).pop();
        const filename = `${slug}.md`;
        const filepath = path.join(OUTPUT_DIR, filename);

        // Skip if already exists
        if (fs.existsSync(filepath)) {
            // console.log(`Skipping existing: ${slug}`);
            return;
        }

        console.log(`Processing: ${url}`);
        const response = await axios.get(url, AXIOS_CONFIG);
        const html = response.data;
        const $ = cheerio.load(html);

        // Extract Metadata
        const title = $('meta[property="og:title"]').attr('content') || $('h1').first().text().trim() || 'Untitled';
        const date = $('meta[property="article:published_time"]').attr('content') || new Date().toISOString();
        const description = $('meta[property="og:description"]').attr('content') || '';
        let image = $('meta[property="og:image"]').attr('content') || '';

        // Tags
        const tags: string[] = [];
        $('meta[property="article:tag"]').each((_, el) => {
            const tag = $(el).attr('content');
            if (tag) tags.push(tag);
        });

        // Content
        // LogRocket specific: usually .post-content or .entry-content
        // They might verify markup, but standard generic selectors usually work
        let contentHtml = '';
        const contentSelectors = ['.post-content', '.entry-content', 'article', 'main'];

        for (const selector of contentSelectors) {
            if ($(selector).length > 0) {
                // Remove some clutter if needed (share buttons, related posts in content)
                $(selector).find('.share-buttons, .related-posts, .ad-container').remove();
                contentHtml = $(selector).html() || '';
                break;
            }
        }

        if (!contentHtml) {
            contentHtml = $('body').html() || '';
        }

        // If no og:image, try first image
        if (!image) {
            const firstImg = $(contentHtml).find('img').first().attr('src');
            if (firstImg) image = firstImg;
        }

        // Convert to Markdown
        const markdown = turndownService.turndown(contentHtml);

        // Create Frontmatter
        const frontmatter = [
            '---',
            `title: "${title.replace(/"/g, '\\"')}"`,
            `date: "${date}"`,
            `slug: "${slug}"`,
            `image: "${image || ''}"`,
            `description: "${description.replace(/"/g, '\\"')}"`,
            `tags: [${tags.map(t => `"${t}"`).join(', ')}]`,
            `original_url: "${url}"`,
            '---',
            '',
            markdown
        ].join('\n');

        fs.writeFileSync(filepath, frontmatter);

    } catch (error) {
        console.error(`Error processing ${url}:`, error);
    }
}

async function main() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const sitemapUrls = await fetchSitemapIndex();
    console.log(`Processing ${sitemapUrls.length} post sitemaps...`);

    for (const sitemapUrl of sitemapUrls) {
        const postUrls = await fetchUrlsFromSitemap(sitemapUrl);

        // Batch process posts in each sitemap
        const BATCH_SIZE = 10;
        for (let i = 0; i < postUrls.length; i += BATCH_SIZE) {
            const batch = postUrls.slice(i, i + BATCH_SIZE);
            await Promise.all(batch.map((url: string) => processPost(url)));
            // Small delay to be nice
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }

    console.log('All done!');
}

main();
