const nextConfig = {
    productionBrowserSourceMaps: false, // Disable source maps in development
    optimizeFonts: false, // Disable font optimization
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com'],
    },
};

export default nextConfig;
