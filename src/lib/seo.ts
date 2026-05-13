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
  extraKeywords?: string[]; // appended to the site-wide base keyword set
};

const ensureLeadingSlash = (p: string) => (p.startsWith('/') ? p : `/${p}`);

// Site-wide base keywords. Page-level metadata adds page-specific terms on top.
// Google does not use the keywords meta, but Bing, several AI search crawlers
// (Perplexity, ChatGPT search), and a number of LLM training pipelines do.
const baseKeywords = [
  'tow truck Townsville',
  'towing Townsville',
  'Townsville tow truck',
  'Townsville towing service',
  '24/7 towing Townsville',
  'emergency tow truck Townsville',
  'tilt tray towing Townsville',
  'accident towing Townsville',
  'breakdown towing Townsville',
  'heavy haulage Townsville',
  '4WD recovery Townsville',
  'tow truck near me Townsville',
];

export function buildMetadata(input: SeoInput): Metadata {
  const url = `${site.url}${ensureLeadingSlash(input.path)}`;
  const ogImage = input.ogImage || site.defaultOgImage;
  const title = input.title;
  const ogTitle = input.ogTitle || input.title;
  const ogDescription = input.ogDescription || input.description;
  const keywords = Array.from(
    new Set([...baseKeywords, ...(input.extraKeywords || [])]),
  );

  return {
    title,
    description: input.description,
    keywords,
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
