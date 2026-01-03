import Link from 'next/link';

import { siteConfig } from '@/config/site';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white dark:bg-black/90 border-b-4 border-primary-main shadow-sm backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between max-w-9xl">
                <Link href="/" className="group flex items-center gap-2">
                    <span className="bg-primary-main text-white font-black text-2xl px-2 py-1 uppercase tracking-tighter">{siteConfig.logoText.primary}</span>
                    <span className="text-2xl font-black text-secondary-main dark:text-white uppercase tracking-tighter group-hover:text-primary-main transition-colors">{siteConfig.logoText.secondary}</span>
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {siteConfig.navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-bold uppercase tracking-widest text-secondary-light hover:text-primary-main dark:text-neutral-400 dark:hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <button className="bg-primary-main hover:bg-primary-dark text-white px-6 py-2 text-sm font-bold uppercase tracking-widest transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </nav>
    );
}
