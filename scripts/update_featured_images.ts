import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');

function extractFirstImage(content: string): string | null {
    // Markdown image regex: ![alt](url "optional title")
    const markdownImageRegex = /!\[.*?\]\((.*?)(?:\s+".*?")?\)/;
    const markdownMatch = content.match(markdownImageRegex);
    if (markdownMatch && markdownMatch[1]) {
        return markdownMatch[1];
    }

    // HTML image regex: <img ... src="url" ... />
    const htmlImageRegex = /<img[^>]+src=["'](.*?)["']/;
    const htmlMatch = content.match(htmlImageRegex);
    if (htmlMatch && htmlMatch[1]) {
        return htmlMatch[1];
    }

    return null;
}

function updateFeaturedImages() {
    if (!fs.existsSync(POSTS_DIR)) {
        console.error(`Directory not found: ${POSTS_DIR}`);
        return;
    }

    const files = fs.readdirSync(POSTS_DIR);
    let updatedCount = 0;

    files.forEach(file => {
        if (!file.endsWith('.md')) return;

        const filePath = path.join(POSTS_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContent);

        // Always check for an image in content to potentially update or set it
        const firstImage = extractFirstImage(content);

        if (firstImage) {
            // Update if it doesn't exist or we want to enforce the first image from content
            // The user request said "find first image ... and use that as featured_image"
            // implying we should overwrite or set it.

            if (data.featured_image !== firstImage) {
                data.featured_image = firstImage;

                const updatedContent = matter.stringify(content, data);
                fs.writeFileSync(filePath, updatedContent);
                console.log(`Updated ${file}: Set featured_image to ${firstImage}`);
                updatedCount++;
            }
        } else {
            console.log(`No image found in content for ${file}`);
        }
    });

    console.log(`\nFinished! Updated ${updatedCount} files.`);
}

updateFeaturedImages();
