import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { parseStringPromise } from 'xml2js';
import slugify from 'slugify';

const SITEMAP_URL = 'https://technostacks.com/post-sitemap.xml';
const OUTPUT_DIR = path.join(process.cwd(), 'websites/technostacks');

// Set User-Agent
const AXIOS_CONFIG = {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
};

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

async function fetchSitemap() {
    try {
        console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
        const response = await axios.get(SITEMAP_URL, AXIOS_CONFIG);
        const xml = response.data;
        const result = await parseStringPromise(xml);

        // Structure: urlset -> url -> loc
        if (!result.urlset || !result.urlset.url) {
            console.error('Invalid sitemap structure');
            return [];
        }

        const urls = result.urlset.url.map((entry: any) => entry.loc[0]);
        console.log(`Found ${urls.length} posts.`);
        return urls;
    } catch (error) {
        console.error('Error fetching sitemap:', error);
        return [];
    }
}

async function processPost(url: string) {
    try {
        const slug = url.split('/').filter(Boolean).pop() || 'index';
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
        // Try generic selectors first, then specific if needed
        let contentHtml = '';
        const contentSelectors = [
            '.post-content',
            '.entry-content',
            '.blog-content',
            '.single-post-content',
            'article',
            'main'
        ];

        for (const selector of contentSelectors) {
            const element = $(selector);
            if (element.length > 0) {
                // Remove clutter
                element.find('script, style, .share-buttons, .related-posts, .author-box, .comments-area').remove();
                contentHtml = element.html() || '';
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

    const urls = await fetchSitemap();

    // Batch process
    const BATCH_SIZE = 5;
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
        const batch = urls.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map((url: string) => processPost(url)));
        await new Promise(resolve => setTimeout(resolve, 500)); // Be nice
    }

    console.log('All done!');
}

main();
