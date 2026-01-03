export default function Footer() {
    return (
        <footer className="bg-secondary-main text-white mt-24 border-t-8 border-primary-main">
            <div className="container mx-auto px-4 py-16 max-w-9xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-3xl font-black font-heading tracking-tighter mb-6">
                            <span className="text-primary-main">SEFF</span>SAID
                        </h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Empowering your daily journey with curated inspiration, practical life advice, and the motivation to build a life you love.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <div className="w-8 h-8 bg-neutral-800 hover:bg-primary-main transition-colors flex items-center justify-center rounded-sm">X</div>
                            <div className="w-8 h-8 bg-neutral-800 hover:bg-primary-main transition-colors flex items-center justify-center rounded-sm">IG</div>
                            <div className="w-8 h-8 bg-neutral-800 hover:bg-primary-main transition-colors flex items-center justify-center rounded-sm">LI</div>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider border-b border-neutral-800 pb-2">Explore</h4>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            <li><a href="#" className="hover:text-primary-main transition-colors">Motivation</a></li>
                            <li><a href="#" className="hover:text-primary-main transition-colors">Productivity</a></li>
                            <li><a href="#" className="hover:text-primary-main transition-colors">Wellness</a></li>
                            <li><a href="#" className="hover:text-primary-main transition-colors">Relationships</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider border-b border-neutral-800 pb-2">Company</h4>
                        <ul className="space-y-3 text-sm text-neutral-400">
                            <li><a href="/about" className="hover:text-primary-main transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary-main transition-colors">Advertise</a></li>
                            <li><a href="#" className="hover:text-primary-main transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-main transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-bold text-lg mb-6 uppercase tracking-wider border-b border-neutral-800 pb-2">Stay Updated</h4>
                        <p className="text-neutral-500 text-xs mb-4">Get the latest insights directly to your inbox.</p>
                        <div className="flex">
                            <input type="email" placeholder="Your email" className="bg-neutral-800 text-white px-4 py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-primary-main" />
                            <button className="bg-primary-main text-white px-4 py-2 text-sm font-bold">GO</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
                    <p>© {new Date().getFullYear()} Seff Said Media. All rights reserved.</p>
                    <p>Designed for Impact.</p>
                </div>
            </div>
        </footer>
    );
}
