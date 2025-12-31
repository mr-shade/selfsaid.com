export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Seff Said</h3>
                        <p className="text-sm text-gray-500 mt-2">Inspiration for your daily journey.</p>
                    </div>
                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Seff Said. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}
