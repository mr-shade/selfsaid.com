import type { Metadata } from 'next'
import { Inter, Merriweather, JetBrains_Mono } from 'next/font/google'
import './globals.css'; import Navbar from '@/components/Navbar'; import Footer from '@/components/Footer';
import Script from 'next/script';

import { getAllPosts } from '@/lib/posts';
import { siteConfig } from '@/config/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'], variable: '--font-merriweather' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export async function generateMetadata(): Promise<Metadata> {
    const posts = getAllPosts();
    const latestImage = posts[0]?.featured_image || siteConfig.ogImage;

    return {
        title: {
            default: `${siteConfig.name} - Inspiration, Motivation, and Life Advice`,
            template: `%s | ${siteConfig.name}`
        },
        description: siteConfig.description,
        keywords: ['motivation', 'inspiration', 'quotes', 'self-improvement', 'productivity', 'life advice'],
        authors: [{ name: siteConfig.name }],
        creator: siteConfig.name,
        metadataBase: new URL(siteConfig.url),
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: siteConfig.url,
            siteName: siteConfig.name,
            title: `${siteConfig.name} - Inspiration, Motivation, and Life Advice`,
            description: siteConfig.description,
            images: [
                {
                    url: latestImage,
                    width: 1200,
                    height: 630,
                    alt: siteConfig.name,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: siteConfig.name,
            description: siteConfig.description,
            creator: '@SeffSaid', // Could separate this into config if needed
            images: [latestImage],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${merriweather.variable} ${jetbrains.variable} font-body bg-neutral-50 dark:bg-black text-secondary-main dark:text-neutral-100 min-h-screen flex flex-col`}>
                <Navbar />
                <main className="flex-grow container mx-auto px-4 pt-24 pb-12 max-w-9xl">
                    {children}
                </main>
                <Footer />
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
                    crossOrigin="anonymous"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    )
}
