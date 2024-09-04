import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'loremflickr.com',
                protocol: 'https',
            },
        ],
    },
    reactStrictMode: true,
};

export default nextConfig;
