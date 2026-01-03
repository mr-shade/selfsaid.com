import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

export default function Home() {
    const allPosts = getAllPosts();
    const heroPost = allPosts[0];
    const latestPosts = allPosts.slice(1, 7); // Next 6 posts
    const trendingPosts = allPosts.slice(7, 12); // Next 5 for sidebar

    return (
        <div className="space-y-16">

            {/* HERO SECTION */}
            {heroPost && (
                <section className="group relative">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-sm shadow-sm">
                            <Link href={`/${heroPost.slug}`}>
                                <div className="aspect-[16/9] relative bg-neutral-200 dark:bg-neutral-800">
                                    {heroPost.featured_image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={heroPost.featured_image}
                                            alt={heroPost.title}
                                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : null}
                                </div>
                            </Link>
                        </div>
                        <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
                            <div className="mb-4">
                                <span className="inline-block bg-primary-main text-white text-xs font-bold uppercase tracking-widest px-2 py-1 mb-2">
                                    Feature Story
                                </span>
                            </div>
                            <Link href={`/${heroPost.slug}`} className="group-hover:text-primary-main transition-colors">
                                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                                    Self Said
                                </h1>
                            </Link>
                            <p className="text-secondary-light dark:text-neutral-400 text-lg mb-6 line-clamp-3">
                                {heroPost.description}
                            </p>
                            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-neutral-500">
                                <span>{heroPost.author}</span>
                                <span className="mx-2">•</span>
                                <span>{new Date(heroPost.date).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-neutral-200 dark:border-neutral-800 pt-16">

                {/* LEFT CONTENT COLUMN */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="flex items-center justify-between mb-8 border-b-2 border-black dark:border-white pb-2">
                        <h2 className="text-2xl font-black font-heading uppercase tracking-tighter">Latest News</h2>
                        <Link href="/posts" className="text-xs font-bold text-primary-main uppercase cursor-pointer hover:underline">View All</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                        {latestPosts.map(post => (
                            <article key={post.slug} className="group flex flex-col h-full">
                                <Link href={`/${post.slug}`} className="block mb-4 overflow-hidden rounded-sm relative aspect-[3/2] bg-neutral-100 dark:bg-neutral-900">
                                    {post.featured_image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={post.featured_image}
                                            alt={post.title}
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : null}
                                </Link>
                                <div className="flex flex-col flex-grow">
                                    <div className="mb-2">
                                        <span className="text-primary-main text-xs font-bold uppercase tracking-widest">
                                            {post.tags?.[0] || 'Article'}
                                        </span>
                                    </div>
                                    <Link href={`/${post.slug}`}>
                                        <h3 className="text-xl font-bold font-heading leading-tight mb-3 group-hover:text-primary-main transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-neutral-500 text-sm line-clamp-3 mb-4 flex-grow">
                                        {post.description}
                                    </p>
                                    <span className="text-xs text-neutral-400 font-medium">
                                        {new Date(post.date).toLocaleDateString()}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDEBAR COLUMN */}
                <div className="col-span-12 lg:col-span-4 space-y-12">

                    {/* TRENDING WIDGET */}
                    <div>
                        <div className="flex items-center mb-6 border-b border-neutral-200 dark:border-neutral-800 pb-2">
                            <h3 className="text-xl font-black font-heading uppercase tracking-tighter">Must Read</h3>
                        </div>
                        <div className="space-y-6">
                            {trendingPosts.map((post, idx) => (
                                <Link key={post.slug} href={`/${post.slug}`} className="group flex gap-4 items-start">
                                    <span className="text-4xl font-black text-neutral-200 dark:text-neutral-800 leading-none -mt-1 group-hover:text-primary-main transition-colors">
                                        {idx + 1}
                                    </span>
                                    <div>
                                        <h4 className="font-bold leading-snug mb-1 group-hover:text-primary-main transition-colors">
                                            {post.title}
                                        </h4>
                                        <span className="text-xs text-neutral-500">
                                            {post.tags?.[0]} • {new Date(post.date).toLocaleDateString()}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* NEWSLETTER WIDGET */}
                    <div className="bg-neutral-100 dark:bg-neutral-900 p-8 border-t-4 border-black dark:border-white">
                        <h3 className="font-black font-heading text-2xl mb-4">Daily Briefing</h3>
                        <p className="text-sm text-neutral-500 mb-6">Essential news, expert analysis, and exclusive content delivered straight to you.</p>
                        <form className="space-y-3">
                            <input type="email" placeholder="Email Address" className="w-full bg-white dark:bg-black border border-neutral-300 dark:border-neutral-700 px-4 py-3 text-sm focus:outline-none focus:border-primary-main" />
                            <button className="w-full bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest py-3 hover:bg-primary-main hover:text-white transition-colors">
                                Sign Up
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}
