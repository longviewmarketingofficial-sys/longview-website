import type { MetadataRoute } from 'next';

const BASE_URL = 'https://longviewmarketing.agency';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/nfc-hardware', // Exclude duplicate route from indexing
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
