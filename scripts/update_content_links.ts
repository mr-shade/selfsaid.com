import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const BASE_URL = 'https://selfsaid.30tools.com';

function updateFiles() {
    if (!fs.existsSync(POSTS_DIR)) {
        console.error(`Directory not found: ${POSTS_DIR}`);
        return;
    }

    const files = fs.readdirSync(POSTS_DIR);
    let updatedCount = 0;

    files.forEach(file => {
        if (!file.endsWith('.md')) return;

        const filePath = path.join(POSTS_DIR, file);
        let content = fs.readFileSync(filePath, 'utf8');
        const slug = file.replace(/\.md$/, '');
        let hasChanges = false;

        // 1. Fix relative links: [text](/slug) -> [text](https://base/slug)
        const linkRegex = /\[([^\]]+)\]\((/[^)]+)\)/g;
        if (linkRegex.test(content)) {
            content = content.replace(linkRegex, (match, text, url) => {
                return `[${text}](${BASE_URL}${url})`;
            });
            hasChanges = true;
        }

        // 2. Add Source link at end if not present
        // Matches "Source: https://selfsaid.30tools.com/slug/"
        const sourceLine = `Source: ${BASE_URL}/${slug}/`;
        
        // Check if ANY source link exists to avoid duplicates or piling up
        if (!content.includes(`Source: ${BASE_URL}`)) {
            // Ensure there's a newline before appending
            content = content.trim() + `\n\n${sourceLine}\n`;
            hasChanges = true;
        }

        if (hasChanges) {
            fs.writeFileSync(filePath, content);
            updatedCount++;
        }
    });

    console.log(`Finished processing. Updated ${updatedCount} files.`);
}

updateFiles();
