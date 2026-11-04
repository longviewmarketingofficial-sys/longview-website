import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://www.longviewmarketing.agency';

// Custom SEO priorities and update frequencies for known canonical routes
const ROUTE_CONFIG: Record<string, { priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = {
  '': { priority: 1.0, changeFrequency: 'weekly' },
  '/investments': { priority: 0.9, changeFrequency: 'weekly' },
  '/hardware': { priority: 0.9, changeFrequency: 'weekly' },
  '/approach': { priority: 0.8, changeFrequency: 'monthly' },
  '/clients': { priority: 0.8, changeFrequency: 'weekly' },
  '/about': { priority: 0.8, changeFrequency: 'monthly' },
};

// Routes explicitly excluded from the sitemap (aliases, admin, tests, non-canonical)
const EXCLUDED_ROUTES = new Set([
  '/nfc-hardware', // Duplicate alias of /hardware
  '/api',
]);

/**
 * Automatically discovers all indexable page routes in the app directory.
 * Updates dynamically whenever pages are added or removed.
 *
 * NOTE ON LASTMOD:
 * In serverless deployment environments (such as Vercel, Netlify, AWS Lambda),
 * file system timestamps (fs.statSync().mtime) reflect the container/zip extraction
 * epoch (e.g. October 2018) rather than actual author edit dates.
 * Per Google Search Central guidelines, unless an accurate content modification
 * date can be definitively guaranteed, `lastmod` is omitted to prevent publishing
 * incorrect historical dates to search engine crawlers.
 */
function getAppRoutes(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app');

  try {
    const sitemapEntries: MetadataRoute.Sitemap = [];

    // Helper to recursively scan for page.tsx / page.js files
    function scanDirectory(dir: string, routePrefix = '') {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.isDirectory()) {
          // Skip internal next.js folders, route groups (group), or private folders _private
          if (entry.name.startsWith('_') || entry.name.startsWith('(') || entry.name === 'api') {
            continue;
          }
          scanDirectory(path.join(dir, entry.name), `${routePrefix}/${entry.name}`);
        } else if (/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) {
          const route = routePrefix === '' ? '' : routePrefix;

          // Skip excluded or duplicate routes
          if (EXCLUDED_ROUTES.has(route)) {
            continue;
          }

          const config = ROUTE_CONFIG[route] || { priority: 0.7, changeFrequency: 'monthly' };

          // Deliberately omitting lastModified to prevent inaccurate serverless zip timestamps (2018-10-20)
          sitemapEntries.push({
            url: `${BASE_URL}${route || '/'}`,
            changeFrequency: config.changeFrequency,
            priority: config.priority,
          });
        }
      }
    }

    scanDirectory(appDir);

    // Sort by priority descending for clean crawler readability
    return sitemapEntries.sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
  } catch (error) {
    console.error('Error auto-generating sitemap from filesystem:', error);

    // Reliable static fallback in case of strict filesystem restrictions
    return [
      {
        url: `${BASE_URL}/`,
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      {
        url: `${BASE_URL}/investments`,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${BASE_URL}/hardware`,
        changeFrequency: 'weekly',
        priority: 0.9,
      },
      {
        url: `${BASE_URL}/clients`,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/approach`,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/about`,
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ];
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getAppRoutes();
}
