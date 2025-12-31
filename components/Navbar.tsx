import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    Seff Said
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors">
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}
