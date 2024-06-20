/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: false,  // Controls whether React Strict Mode is enabled
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx", "md"],  // File extensions for pages
    images: {
      remotePatterns: [{hostname:"**", protocol:"https"}]  // Allows images from specific external URLs
    },
};

export default nextConfig;
