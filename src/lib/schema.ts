import { site } from '@/config/site';
import type { Faq, ServicePage, Suburb, TowingCompany, BlogPost } from '@/types';

export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/hero/towing-townsville.png`,
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Townsville, Queensland',
  },
  sameAs: [],
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: site.url,
  name: site.name,
  description: site.description,
  inLanguage: 'en-AU',
});

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
});

export const breadcrumbSchema = (
  items: { name: string; path: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${site.url}${it.path}`,
  })),
});

export const recommendedItemListSchema = (companies: TowingCompany[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Recommended Towing Companies in Townsville',
  itemListElement: companies.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'LocalBusiness',
      name: c.name,
      url: c.websiteUrl,
      telephone: c.phone,
      areaServed: 'Townsville, QLD',
      description: c.shortPitch,
    },
  })),
});

export const serviceSchema = (s: ServicePage) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.h1,
  serviceType: s.h1,
  areaServed: { '@type': 'AdministrativeArea', name: 'Townsville, QLD' },
  description: s.metaDescription,
  provider: {
    '@type': 'Organization',
    name: site.name,
    url: site.url,
  },
});

export const placeSchema = (s: Suburb) => ({
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: `${s.name}, Townsville`,
  description: s.metaDescription,
  containedInPlace: {
    '@type': 'AdministrativeArea',
    name: 'Townsville, QLD',
  },
});

export const articleSchema = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  dateModified: post.date,
  author: { '@type': 'Person', name: post.author },
  publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: `${site.url}/og/default.svg` } },
  mainEntityOfPage: `${site.url}/blog/${post.slug}`,
});
