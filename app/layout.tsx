import type { Metadata } from 'next'
import { Inter, Merriweather, JetBrains_Mono } from 'next/font/google'
import './globals.css'; import Navbar from '@/components/Navbar'; import Footer from '@/components/Footer';
import Script from 'next/script';

import { getAllPosts } from '@/lib/posts';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const merriweather = Merriweather({ weight: ['300', '400', '700', '900'], subsets: ['latin'], variable: '--font-merriweather' })
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' })

export async function generateMetadata(): Promise<Metadata> {
    const posts = getAllPosts();
    const latestImage = posts[0]?.featured_image || '/images/og-default.jpg';

    return {
        title: {
            default: 'Self Said - Inspiration, Motivation, and Life Advice',
            template: '%s | Self Said'
        },
        description: 'Your daily dose of inspiration, motivation, and practical life advice. Discover quotes, productivity tips, and personal development guides.',
        keywords: ['motivation', 'inspiration', 'quotes', 'self-improvement', 'productivity', 'life advice'],
        authors: [{ name: 'Self Said' }],
        creator: 'Self Said',
        metadataBase: new URL('https://selfsaid.pages.dev'),
        openGraph: {
            type: 'website',
            locale: 'en_US',
            url: 'https://selfsaid.pages.dev',
            siteName: 'Self Said',
            title: 'Self Said - Inspiration, Motivation, and Life Advice',
            description: 'Your daily dose of inspiration, motivation, and practical life advice.',
            images: [
                {
                    url: latestImage,
                    width: 1200,
                    height: 630,
                    alt: 'Self Said',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Self Said',
            description: 'Your daily dose of inspiration, motivation, and practical life advice.',
            creator: '@SelfSaid',
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
