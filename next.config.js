/** @type {import('next').NextConfig} */
// const nextConfig = {};
const nextConfig = {
    basePath: "/RunwayWebsite",
    output: "export",  // <=== enables static exports
    reactStrictMode: true,
    images: { unoptimized: true }
};

module.exports = nextConfig;
