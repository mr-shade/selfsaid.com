import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';

// Revalidate every hour
// export const revalidate = 3600; 
// or static since we do 'output: export'

export default function Home() {
    const posts = getAllPosts();

    return (
        <div className="space-y-8">
            <section className="text-center py-12">
                <h1 className="text-4xl font-bold mb-4">Welcome to Seff Said</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                    Inspiration, Motivation, and Life Advice for your daily journey.
                </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <article key={post.slug} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700">
                        {post.featured_image && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={post.featured_image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                            />
                        )}
                        <div className="p-4">
                            <div className="text-sm text-gray-500 mb-2">
                                {post.date ? new Date(post.date).toLocaleDateString() : ''}
                            </div>
                            <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                                <Link href={`/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                                {post.description}
                            </p>
                            <Link href={`/${post.slug}`} className="text-blue-500 hover:underline text-sm font-medium">
                                Read more →
                            </Link>
                        </div>
                    </article>
                ))}
            </section>
        </div>
    )
}
