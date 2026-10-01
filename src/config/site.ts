/**
 * Single source of truth for brand metadata.
 * Change the brand name, domain, contact and nav from here.
 */
export const site = {
  // Brand matches the exact-match domain and the badge logo. The old
  // "Townsville Towing Compare" name is kept as an alternateName in schema.
  name: 'Towing Townsville',
  legacyName: 'Townsville Towing Compare',
  shortName: 'Towing Townsville',
  tagline: 'Find a tow truck in Townsville, fast',
  description:
    'Towing Townsville — find a 24/7 tow truck anywhere in Townsville. Compare accident, breakdown, tilt tray, heavy and 4WD towing and call a recommended local operator.',
  domain: 'towingtownsville.com',
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    // Vercel serves the site on www (the apex redirects there), so canonicals
    // and the sitemap must use www or Google sees every canonical redirect.
    'https://www.towingtownsville.com',
  locale: 'en-AU',
  region: 'Townsville, QLD, Australia',
  contactEmail: 'hello@towingtownsville.com',
  defaultOgImage: '/og/default.jpg',
  themeColor: '#0B1B2B',
  nav: [
    { href: '/services', label: 'Services' },
    { href: '/townsville', label: 'Suburbs' },
    { href: '/recommended', label: 'Recommended' },
    { href: '/compare', label: 'Compare' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  primaryCtaLabel: 'Find a Tow Truck Now',
  // Optional Google Search Console verification token (env wins).
  googleSiteVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
} as const;

export type SiteConfig = typeof site;
