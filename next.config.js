
/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src  'self' 'unsafe-eval' 'unsafe-inline'  googletagmanager.com;
  child-src tuliohector.github.io;
  style-src 'unsafe-inline' tuliohector.github.io fonts.googleapis.com;
  font-src 'self' fonts.gstatic.com identitytoolkit.googleapis.com;
`;
const securityHeaders = [
    {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
    },
    {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
    },
    {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
    },
    {
        key: 'X-Frame-Options',
        value: 'DENY',
    },
    //   {
    //     key: 'Content-Security-Policy',
    //     value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
    //   }
];
const nextConfig = {
    images: {
        unoptimized: true
    },
    trailingSlash: true,
    reactStrictMode: true,
    devIndicators: {
        buildActivity: false,
    },
    experimental: {
        appDir: false,
    },

    // async headers() {
    //     return [
    //         {
    //             // Apply these headers to all routes in your application.
    //             source: '/(.*)',
    //             headers: securityHeaders,
    //         },
    //     ]
    // },
    // exportPathMap: async function (
    //     defaultPathMap,
    //     { dev, dir, outDir, distDir, buildId }
    // ) {
    //     return {
    //         '/': { page: '/' },
    //         '/404': { page: '/404' },
    //         '/about': { page: '/about' },
    //         '/contact': { page: '/contact' },
    //         '/post': {page: '/post'},
    //     }
    // },
}

module.exports = nextConfig
