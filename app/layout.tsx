import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'Seff Said - Inspiration, Motivation, and Life Advice',
        template: '%s | Seff Said'
    },
    description: 'Your daily dose of inspiration, motivation, and practical life advice. Discover quotes, productivity tips, and personal development guides.',
    keywords: ['motivation', 'inspiration', 'quotes', 'self-improvement', 'productivity', 'life advice'],
    authors: [{ name: 'Seff Said' }],
    creator: 'Seff Said',
    metadataBase: new URL('https://seffsaid.com'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://seffsaid.com',
        siteName: 'Seff Said',
        title: 'Seff Said - Inspiration, Motivation, and Life Advice',
        description: 'Your daily dose of inspiration, motivation, and practical life advice.',
        images: [
            {
                url: '/images/og-default.jpg', // We need to ensure this exists or use a random one
                width: 1200,
                height: 630,
                alt: 'Seff Said',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Seff Said',
        description: 'Your daily dose of inspiration, motivation, and practical life advice.',
        creator: '@SeffSaid',
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
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="min-h-screen flex flex-col">
                    {/* Header could go here */}
                    <header className="p-4 border-b bg-white dark:bg-black">
                        <div className="container mx-auto">
                            <h1 className="text-2xl font-bold"><a href="/">Seff Said</a></h1>
                        </div>
                    </header>
                    <main className="flex-grow container mx-auto p-4">
                        {children}
                    </main>
                    <footer className="p-4 border-t text-center text-sm text-gray-500">
                        © {new Date().getFullYear()} Seff Said. All rights reserved.
                    </footer>
                </div>
            </body>
        </html>
    )
}
