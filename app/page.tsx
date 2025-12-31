import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

// Revalidate every hour
// export const revalidate = 3600; 
// or static since we do 'output: export'

export default function Home() {
    const posts = getAllPosts();

    return (
        <div className="space-y-12">
            <section className="text-center py-20 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-3xl mb-12">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                    Seff Said
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
                    Inspiration, Motivation, and Life Advice for your everyday journey.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <article key={post.slug} className="group bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <Link href={`/${post.slug}`} className="block h-full flex flex-col">
                            <div className="relative h-56 overflow-hidden bg-gray-200 dark:bg-gray-800">
                                {post.featured_image ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={post.featured_image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <span className="text-4xl opacity-20">❝❞</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex-grow flex flex-col">
                                <div className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3 uppercase tracking-wider">
                                    {post.tags?.[0] || 'Article'}
                                </div>
                                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-6 flex-grow">
                                    {post.description}
                                </p>
                                <div className="flex items-center text-sm text-gray-500 font-medium">
                                    <span>Read Article</span>
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>
        </div>
    )
}
