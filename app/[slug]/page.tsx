import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

// Components for MDX
const components = {
    // Add custom components here if needed
    // img: (props: any) => <img {...props} className="rounded-lg my-4" />,
};

interface Props {
    params: { slug: string }
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = getPostBySlug(params.slug);
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

export default function PostPage({ params }: Props) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="max-w-3xl mx-auto py-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                    <span className="mr-4">By {post.author}</span>
                    <span>{post.date ? new Date(post.date).toLocaleDateString() : ''}</span>
                </div>
                {post.tags && post.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </header>

            {post.featured_image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-auto rounded-lg mb-8 shadow-md"
                />
            )}

            <div className="prose dark:prose-invert lg:prose-xl max-w-none">
                <MDXRemote source={post.content} components={components} />
            </div>
        </article>
    );
}
