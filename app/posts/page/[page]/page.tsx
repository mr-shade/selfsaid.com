import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';

const POSTS_PER_PAGE = 12;

export const dynamicParams = false;

export async function generateStaticParams() {
    const posts = getAllPosts();
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    // Generate params for page 2 to N
    // Page 1 is handled by /posts/page.tsx
    const params = [];
    for (let i = 2; i <= totalPages; i++) {
        params.push({ page: i.toString() });
    }
    return params;
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
    const { page } = await params;
    return {
        title: `All Posts - Page ${page} | Self Said`,
        description: `Browse page ${page} of our article collection.`,
    };
}

export default async function PostsPage({ params }: { params: Promise<{ page: string }> }) {
    const { page } = await params;
    const currentPage = parseInt(page);

    if (isNaN(currentPage)) notFound();

    const allPosts = getAllPosts();
    const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);

    if (currentPage < 2 || currentPage > totalPages) {
        notFound();
    }

    const start = (currentPage - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    const posts = allPosts.slice(start, end);

    const prevPage = currentPage === 2 ? '/posts' : `/posts/page/${currentPage - 1}`;
    const nextPage = currentPage < totalPages ? `/posts/page/${currentPage + 1}` : null;

    return (
        <div className="space-y-12">
            <header className="text-center py-16 border-b border-neutral-200 dark:border-neutral-800">
                <h1 className="text-4xl md:text-5xl font-black font-heading mb-4 text-secondary-main dark:text-white">
                    All Articles
                </h1>
                <p className="text-neutral-500 max-w-2xl mx-auto uppercase tracking-widest text-sm font-bold">
                    Page {currentPage} of {totalPages}
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
            <div className="flex justify-center items-center gap-8 pt-12">
                <Link
                    href={prevPage}
                    className="inline-flex items-center px-6 py-3 border border-neutral-300 dark:border-neutral-700 font-bold uppercase tracking-widest hover:border-primary-main hover:text-primary-main transition-colors text-sm"
                >
                    <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                    Previous
                </Link>

                {nextPage && (
                    <Link
                        href={nextPage}
                        className="inline-flex items-center px-6 py-3 border-2 border-primary-main text-primary-main font-bold uppercase tracking-widest hover:bg-primary-main hover:text-white transition-colors text-sm"
                    >
                        Next
                        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                )}
            </div>
        </div>
    );
}
