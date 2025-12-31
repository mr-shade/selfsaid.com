import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

// Components for MDX
const components = {
    // Add custom components here if needed
    // img: (props: any) => <img {...props} className="rounded-lg my-4" />,
};

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            images: post.featured_image ? [post.featured_image] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: post.featured_image ? [post.featured_image] : [],
        },
    };
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-4xl mx-auto">
            <header className="mb-10 text-center">
                <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-4">
                    {post.tags?.[0] || 'Article'}
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent">
                    {post.title}
                </h1>
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm md:text-base">
                    <span className="font-medium text-gray-900 dark:text-white mr-2">{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date ? new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</span>
                </div>
            </header>

            {post.featured_image && (
                <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-auto object-cover max-h-[600px]"
                    />
                </div>
            )}

            <div className="prose dark:prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-xl prose-img:shadow-lg">
                <MDXRemote source={post.content} components={components} />
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {post.tags?.map(tag => (
                        <Link key={tag} href={`/?tag=${tag}`} className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-3 py-1.5 rounded-full text-sm font-medium transition-colors">
                            #{tag}
                        </Link>
                    ))}
                </div>
            </div>
        </article>
    );
}
