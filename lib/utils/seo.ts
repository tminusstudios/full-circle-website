// SEO and Structured Data Utilities

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HealthAndBeautyBusiness',
    name: 'Full Circle Function & Fitness',
    url: 'https://fullcirclefunctionandfitness.com',
    telephone: '+1-412-295-7058',
    email: 'cody@fullcirclefunctionandfitness.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4361 William Flinn Hwy',
      addressLocality: 'Allison Park',
      addressRegion: 'PA',
      postalCode: '15101',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.5794133,
      longitude: -79.9531398,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '75',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '20:00',
    },
    priceRange: '$$',
    sameAs: [
      'https://www.facebook.com/Full-Circle-Function-Fitness-109803007519493',
      'https://www.instagram.com/fullcirclefunctionandfitness/',
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
