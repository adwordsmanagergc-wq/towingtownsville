/**
 * Single source of truth for brand metadata.
 * Change the brand name, domain, contact and nav from here.
 */
export const site = {
  name: 'Townsville Towing Compare',
  shortName: 'TT Compare',
  tagline: 'Compare and find the best tow truck in Townsville',
  description:
    'Compare every type of tow service in Townsville and see the operators we recommend for fast, properly insured, damage-free recoveries.',
  domain: 'towingtownsville.com',
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
    'https://towingtownsville.com',
  locale: 'en-AU',
  region: 'Townsville, QLD, Australia',
  contactEmail: 'hello@towingtownsville.com',
  defaultOgImage: '/og/default.svg',
  themeColor: '#0B1B2B',
  nav: [
    { href: '/services', label: 'Services' },
    { href: '/recommended', label: 'Recommended' },
    { href: '/townsville', label: 'Suburbs' },
    { href: '/compare', label: 'Compare' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  primaryCtaLabel: 'Find a Tow Truck Now',
  // Optional Google Search Console verification token (env wins).
  googleSiteVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
} as const;

export type SiteConfig = typeof site;
