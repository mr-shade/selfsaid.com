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

// Force static gen
export const dynamicParams = false;

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
            {/* Header Section */}
            <header className="mb-12 text-center">
                <div className="mb-6">
                    <span className="inline-block bg-primary-main text-white text-xs font-bold uppercase tracking-widest px-3 py-1">
                        {post.tags?.[0] || 'Article'}
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading mb-8 leading-tight text-secondary-main dark:text-white">
                    {post.title}
                </h1>

                <div className="flex items-center justify-center text-sm font-bold uppercase tracking-widest text-neutral-500 border-y border-neutral-200 dark:border-neutral-800 py-4 max-w-xl mx-auto">
                    <span className="text-secondary-main dark:text-white">{post.author}</span>
                    <span className="mx-4 text-neutral-300">•</span>
                    <span>{post.date ? new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : ''}</span>
                </div>
            </header>

            {/* Featured Image */}
            {post.featured_image && (
                <div className="mb-16 -mx-4 md:mx-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-auto object-cover max-h-[600px] shadow-sm"
                    />
                    <p className="text-center text-xs text-neutral-400 mt-2 italic">Image: {post.title}</p>
                </div>
            )}

            {/* Content Body */}
            <div className="prose dark:prose-invert prose-lg md:prose-xl max-w-none 
                prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight 
                prose-p:font-body prose-p:leading-relaxed prose-p:text-neutral-700 dark:prose-p:text-neutral-300
                prose-a:text-primary-main hover:prose-a:text-primary-dark prose-a:no-underline hover:prose-a:underline
                prose-blockquote:border-l-4 prose-blockquote:border-primary-main prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-heading
                prose-img:rounded-sm prose-img:shadow-sm">
                <MDXRemote source={post.content} components={components} />
            </div>

            {/* Tags Footer */}
            <div className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-neutral-500">Filed Under</h3>
                <div className="flex flex-wrap gap-2">
                    {post.tags?.map(tag => (
                        <Link key={tag} href={`/?tag=${tag}`} className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-secondary-main dark:text-white px-4 py-2 text-sm font-bold uppercase tracking-wide transition-colors">
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </article>
    );
}
