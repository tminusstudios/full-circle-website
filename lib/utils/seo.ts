// SEO and Structured Data Utilities

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.fullcirclefunctionandfitness.com',
    name: 'Full Circle Function & Fitness',
    description: 'Performance-driven personal training and massage therapy in Pittsburgh',
    url: 'https://www.fullcirclefunctionandfitness.com',
    telephone: '', // To be added
    email: 'info@fullcirclefunctionandfitness.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pittsburgh',
      addressRegion: 'PA',
      addressCountry: 'US',
      // streetAddress to be added after content extraction
    },
    geo: {
      '@type': 'GeoCoordinates',
      // latitude and longitude to be added
    },
    priceRange: '$$',
    image: 'https://www.fullcirclefunctionandfitness.com/images/og-image.jpg',
    sameAs: [
      // Social media URLs to be added
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Full Circle Function & Fitness',
    url: 'https://www.fullcirclefunctionandfitness.com',
    logo: 'https://www.fullcirclefunctionandfitness.com/images/logo.svg',
    description: 'Performance-driven personal training and massage therapy in Pittsburgh',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pittsburgh',
      addressRegion: 'PA',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'info@fullcirclefunctionandfitness.com',
    },
  };
}
