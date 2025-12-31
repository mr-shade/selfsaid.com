import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts()
    const baseUrl = 'https://selfsaid.pages.dev' // Using the production domain as canonical

    const postEntries = posts.map((post) => ({
        url: `${baseUrl}/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        ...postEntries,
    ]
}
