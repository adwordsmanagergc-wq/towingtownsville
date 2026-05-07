import type { Metadata } from 'next';
import { site } from '@/config/site';

type SeoInput = {
  title: string; // page-specific title (no brand suffix)
  description: string;
  path: string; // leading slash, no trailing slash, e.g. '/services'
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
};

const ensureLeadingSlash = (p: string) => (p.startsWith('/') ? p : `/${p}`);

export function buildMetadata(input: SeoInput): Metadata {
  const url = `${site.url}${ensureLeadingSlash(input.path)}`;
  const ogImage = input.ogImage || site.defaultOgImage;
  const title = input.title;
  const ogTitle = input.ogTitle || input.title;
  const ogDescription = input.ogDescription || input.description;

  return {
    title,
    description: input.description,
    metadataBase: new URL(site.url),
    alternates: { canonical: url },
    robots: input.noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: 'website',
      url,
      siteName: site.name,
      title: ogTitle,
      description: ogDescription,
      images: [{ url: ogImage, width: 1200, height: 630, alt: site.name }],
      locale: 'en_AU',
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
    other: site.googleSiteVerification
      ? { 'google-site-verification': site.googleSiteVerification }
      : undefined,
  };
}

export const canonicalUrl = (path: string) => `${site.url}${ensureLeadingSlash(path)}`;
