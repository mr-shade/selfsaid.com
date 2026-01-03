import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

const POSTS_PER_PAGE = 12;

export const metadata = {
    title: 'All Posts - Page 1 | Self Said',
    description: 'Browse our complete collection of articles on motivation, productivity, and life advice.',
};

export default function PostsIndex() {
    const allPosts = getAllPosts();
    const posts = allPosts.slice(0, POSTS_PER_PAGE);
    const hasNextPage = allPosts.length > POSTS_PER_PAGE;

    return (
        <div className="space-y-12">
            <header className="text-center py-16 border-b border-neutral-200 dark:border-neutral-800">
                <h1 className="text-4xl md:text-5xl font-black font-heading mb-4 text-secondary-main dark:text-white">
                    All Articles
                </h1>
                <p className="text-neutral-500 max-w-2xl mx-auto">
                    Explore our archive of insights and inspiration.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <article key={post.slug} className="group flex flex-col h-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <Link href={`/${post.slug}`} className="block relative aspect-[3/2] overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                            {post.featured_image ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    src={post.featured_image}
                                    alt={post.title}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            ) : null}
                        </Link>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="mb-3">
                                <span className="text-primary-main text-xs font-bold uppercase tracking-widest">
                                    {post.tags?.[0] || 'Article'}
                                </span>
                            </div>
                            <Link href={`/${post.slug}`}>
                                <h2 className="text-xl font-bold font-heading leading-tight mb-3 group-hover:text-primary-main transition-colors line-clamp-2">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-neutral-500 text-sm line-clamp-3 mb-4 flex-grow">
                                {post.description}
                            </p>
                            <div className="flex items-center justify-between text-xs text-neutral-400 font-medium pt-4 border-t border-neutral-100 dark:border-neutral-800">
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                                <span className="uppercase tracking-widest group-hover:text-primary-main transition-colors">Read More</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* Pagination Controls */}
            {hasNextPage && (
                <div className="flex justify-center pt-12">
                    <Link
                        href="/posts/page/2"
                        className="inline-flex items-center px-8 py-3 border-2 border-primary-main text-primary-main font-bold uppercase tracking-widest hover:bg-primary-main hover:text-white transition-colors"
                    >
                        Next Page
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            )}
        </div>
    );
}
