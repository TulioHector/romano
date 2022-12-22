const { imageConfigDefault } = require('next/dist/shared/lib/image-config');

/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self' ;
  script-src  'self' 'unsafe-inline' https://www.googletagmanager.com vitals.vercel-insights.com;
  child-src romanohector.vercel.app;
  style-src 'unsafe-inline' romanohector.vercel.app fonts.googleapis.com;
  font-src 'self' fonts.gstatic.com identitytoolkit.googleapis.com;
  img-src 'self' www.googletagmanager.com www.google.com/;
  connect-src https://firestore.googleapis.com https://vitals.vercel-insights.com;
`;
let securityHeaders = [
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
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
  },
];

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele.key != value;
  });
}

if(process.env.NODE_ENV === 'development') {
  securityHeaders = arrayRemove(securityHeaders, 'Content-Security-Policy');
}

console.log(securityHeaders);

const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    appDir: false,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
