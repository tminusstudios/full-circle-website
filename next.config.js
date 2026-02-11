/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'static.wixstatic.com',
      'video.wixstatic.com',
    ],
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      // Redirect duplicate/draft pages to main pages
      {
        source: '/about-7',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/general-8',
        destination: '/',
        permanent: true,
      },
      {
        source: '/copy-of-about',
        destination: '/about',
        permanent: true,
      },
      // Add more redirects as needed during content extraction phase
    ];
  },
};

module.exports = nextConfig;
