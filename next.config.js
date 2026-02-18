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
      // Old short paths → new routes
      {
        source: '/training',
        destination: '/personal-training',
        permanent: true,
      },
      {
        source: '/massage',
        destination: '/massage-therapy',
        permanent: true,
      },
      // Old Wix paths → new routes
      {
        source: '/private-yoga',
        destination: '/yoga',
        permanent: true,
      },
      // Old Wix booking/scheduling URLs → contact
      {
        source: '/book-online',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/schedule',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/booking',
        destination: '/contact',
        permanent: true,
      },
      // Old Wix duplicate/draft pages
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
      {
        source: '/copy-of-personal-training',
        destination: '/personal-training',
        permanent: true,
      },
      {
        source: '/copy-of-massage-therapy',
        destination: '/massage-therapy',
        permanent: true,
      },
      {
        source: '/copy-of-types-of-massage-therapy',
        destination: '/massage-therapy',
        permanent: true,
      },
      {
        source: '/copy-of-do-you-help-with-nutrition-as',
        destination: '/personal-training',
        permanent: true,
      },
      {
        source: '/copy-of-massage-after-care',
        destination: '/massage-therapy',
        permanent: true,
      },
      {
        source: '/copy-of-how-long-is-a-session',
        destination: '/personal-training',
        permanent: true,
      },
      {
        source: '/copy-of-do-people-get-hurt-from-lifti',
        destination: '/personal-training',
        permanent: true,
      },
      {
        source: '/copy-of-exercise-frequency-to-notice',
        destination: '/personal-training',
        permanent: true,
      },
      // Catch-all for any remaining /copy-of-* Wix pages
      {
        source: '/copy-of-:slug*',
        destination: '/',
        permanent: true,
      },
      // Common Wix misc paths → homepage
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
