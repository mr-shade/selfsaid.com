import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-secondary-main dark:bg-black text-white pt-20 pb-10 border-t-8 border-primary-main">
            <div className="container mx-auto px-4 max-w-9xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-3xl font-black font-heading tracking-tighter mb-6">
                            <span className="text-primary-main">{siteConfig.logoText.primary.toUpperCase()}</span>{siteConfig.logoText.secondary.toUpperCase()}
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            {siteConfig.description}
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder - Could map from siteConfig.social if needed */}
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-neutral-700 pb-2">Explore</h4>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            {siteConfig.navLinks.map(link => (
                                <li key={link.name}><Link href={link.href} className="hover:text-primary-main transition-colors">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-neutral-700 pb-2">Company</h4>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            {siteConfig.footerLinks.map(link => (
                                <li key={link.name}><Link href={link.href} className="hover:text-primary-main transition-colors">{link.name}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <h4 className="text-lg font-bold uppercase tracking-widest mb-6 border-b border-neutral-700 pb-2">Stay Inspired</h4>
                        <p className="text-neutral-400 text-xs mb-4">Join our community for weekly updates.</p>
                        <form className="flex flex-col gap-2">
                            <input type="email" placeholder="Email Address" className="bg-neutral-900 border border-neutral-800 text-white px-4 py-3 text-sm focus:outline-none focus:border-primary-main rounded-sm" />
                            <button className="bg-white text-black font-bold uppercase tracking-widest py-3 hover:bg-primary-main hover:text-white transition-colors rounded-sm text-xs">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                    <p>Designed for Impact.</p>
                </div>
            </div>
        </footer>
    )
}
