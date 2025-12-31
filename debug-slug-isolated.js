import fs from 'fs';
import path from 'path';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');
const targetSlug = 'cant-focus-5-minute-fix';

console.log('--- DEBUG START ---');
console.log('POSTS_DIR:', POSTS_DIR);

try {
    const fileNames = fs.readdirSync(POSTS_DIR);
    const match = fileNames.find(f => f.includes('cant-focus-5-minute-fix'));

    if (match) {
        console.log('Found file in readdir:', match);
        console.log('Hex dump of filename:', Buffer.from(match).toString('hex'));

        const generatedSlug = match.replace(/\.md$/, '');
        console.log('Generated slug:', generatedSlug);
        console.log('Target slug:   ', targetSlug);
        console.log('Match?', generatedSlug === targetSlug);

        // Try reading by constructing path from slug
        const constructedPath = path.join(POSTS_DIR, `${targetSlug}.md`);
        console.log('Constructed path:', constructedPath);

        try {
            fs.accessSync(constructedPath);
            console.log('fs.accessSync: OK');
            const localContent = fs.readFileSync(constructedPath, 'utf8');
            console.log('fs.readFileSync: OK');
            console.log('Content length:', localContent.length);
        } catch (err) {
            console.error('fs access/read FAILED:', err.message);
        }

    } else {
        console.log('File NOT FOUND in readdir');
    }

} catch (e) {
    console.error('General Error:', e);
}
console.log('--- DEBUG END ---');
