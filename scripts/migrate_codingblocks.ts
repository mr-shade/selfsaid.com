import fs from 'fs';
import path from 'path';
import axios from 'axios';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { parseStringPromise } from 'xml2js';
import slugify from 'slugify';

const SITEMAP_URL = 'https://blog.codingblocks.com/sitemap-posts.xml';
const OUTPUT_DIR = path.join(process.cwd(), 'websites/codingblocks');

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

async function fetchSitemap() {
    try {
        console.log(`Fetching sitemap from ${SITEMAP_URL}...`);
        const response = await axios.get(SITEMAP_URL);
        const xml = response.data;
        const result = await parseStringPromise(xml);
        
        // sitemap structure usually: urlset -> url -> loc
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
        console.log(`Processing: ${url}`);
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        // Extract Metadata
        const title = $('meta[property="og:title"]').attr('content') || $('h1').first().text().trim() || 'Untitled';
        const date = $('meta[property="article:published_time"]').attr('content') || new Date().toISOString();
        const description = $('meta[property="og:description"]').attr('content') || '';
        const image = $('meta[property="og:image"]').attr('content') || '';
        
        // Tags
        const tags: string[] = [];
        $('meta[property="article:tag"]').each((_, el) => {
            const tag = $(el).attr('content');
            if (tag) tags.push(tag);
        });

        // Content
        // Try to find the main content container. Common classes: .post-content, article, .entry-content
        let contentHtml = '';
        const contentSelectors = ['.post-content', '.article-content', '.entry-content', 'article', 'main'];
        
        for (const selector of contentSelectors) {
            if ($(selector).length > 0) {
                contentHtml = $(selector).html() || '';
                break;
            }
        }
        
        if (!contentHtml) {
             contentHtml = $('body').html() || ''; // Fallback
        }

        // If no featured image in metadata, try to find first image in content
        let finalImage = image;
        if (!finalImage) {
            const firstImg = $(contentHtml).find('img').first().attr('src');
            if (firstImg) finalImage = firstImg;
        }

        // Convert to Markdown
        const markdown = turndownService.turndown(contentHtml);

        // Slug
        const slug = url.split('/').filter(Boolean).pop() || slugify(title, { lower: true });
        
        // Create Frontmatter
        const frontmatter = [
            '---',
            `title: "${title.replace(/"/g, '\\"')}"`,
            `date: "${date}"`,
            `slug: "${slug}"`,
            `image: "${finalImage || ''}"`,
            `description: "${description.replace(/"/g, '\\"')}"`,
            `tags: [${tags.map(t => `"${t}"`).join(', ')}]`,
            `original_url: "${url}"`,
            '---',
            '',
            markdown
        ].join('\n');

        // Save
        const filename = `${slug}.md`;
        const filepath = path.join(OUTPUT_DIR, filename);
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
    
    // Process in batches to avoid overwhelming
    const BATCH_SIZE = 5;
    for (let i = 0; i < urls.length; i += BATCH_SIZE) {
        const batch = urls.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map(url => processPost(url)));
        console.log(`Processed ${Math.min(i + BATCH_SIZE, urls.length)} / ${urls.length}`);
    }
    
    console.log('Done!');
}

main();
