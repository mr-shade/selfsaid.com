import { getPostBySlug } from './lib/posts.js';
import path from 'path';

const slug = 'cant-focus-5-minute-fix';
console.log(`Testing slug: ${slug}`);
console.log(`CWD: ${process.cwd()}`);

try {
    const post = getPostBySlug(slug);
    if (post) {
        console.log('SUCCESS: Post found');
        console.log('Title:', post.title);
    } else {
        console.log('FAILURE: Post returned null');
        // Let's retry manually to show why
        const POSTS_DIR = path.join(process.cwd(), 'content/posts');
        const fullPath = path.join(POSTS_DIR, `${slug}.md`);
        console.log(`Expected path: ${fullPath}`);

        import('fs').then(fs => {
            if (fs.existsSync(fullPath)) {
                console.log('File EXISTS on disk');
            } else {
                console.log('File DOES NOT exist on disk');

                // duplicate check
                const dir = fs.readdirSync(POSTS_DIR);
                console.log('Similar files in dir:');
                dir.forEach(f => {
                    if (f.includes('cant-focus')) {
                        console.log(` - ${f} (len: ${f.length})`);
                        console.log(`   hex: ${Buffer.from(f).toString('hex')}`);
                    }
                });
            }
        });
    }
} catch (e) {
    console.error('ERROR:', e);
}
