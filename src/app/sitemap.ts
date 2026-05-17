import type { MetadataRoute } from 'next';
import { site } from '@/config/site';
import { services } from '@/data/services';
import { suburbs } from '@/data/suburbs';
import { allBlogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes = [
    '/',
    '/services',
    '/townsville',
    '/recommended',
    '/compare',
    '/blog',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ].map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: p === '/' ? 1 : 0.8,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const suburbRoutes = suburbs.map((s) => ({
    url: `${base}/townsville/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = allBlogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...suburbRoutes, ...blogRoutes];
}
