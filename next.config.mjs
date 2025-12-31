/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Optional: add trailing slash for consistent static routing
    trailingSlash: true,
};

export default nextConfig;
