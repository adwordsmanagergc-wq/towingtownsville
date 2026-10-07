import { site } from '@/config/site';
import type { Faq, ServicePage, Suburb, TowingCompany, BlogPost } from '@/types';
import { companies } from '@/data/companies';

export const orgSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${site.url}/#organization`,
  name: site.name,
  alternateName: [site.legacyName, site.domain],
  url: site.url,
  logo: `${site.url}/hero/towing-townsville.png`,
  description: site.description,
  email: site.contactEmail,
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Townsville, Queensland',
  },
  sameAs: [],
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  alternateName: [site.legacyName, site.domain],
  publisher: { '@id': `${site.url}/#organization` },
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

const townsville = {
  '@type': 'City',
  name: 'Townsville',
  containedInPlace: { '@type': 'State', name: 'Queensland' },
};

// The recommended operators as AutomotiveBusiness entities (the closest
// schema.org type to a tow truck company).
const companyBusiness = (c: TowingCompany) => ({
  '@type': 'AutomotiveBusiness',
  name: c.name,
  url: c.websiteUrl,
  telephone: c.phone,
  description: c.shortPitch,
  areaServed: townsville,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Townsville',
    addressRegion: 'QLD',
    addressCountry: 'AU',
  },
  ...(c.available247
    ? {
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      }
    : {}),
});

export const recommendedItemListSchema = (companies: TowingCompany[]) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Recommended Towing Companies in Townsville',
  itemListElement: companies.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: companyBusiness(c),
  })),
});

export const serviceSchema = (s: ServicePage) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: s.h1,
  serviceType: s.h1,
  areaServed: townsville,
  description: s.metaDescription,
  url: `${site.url}/services/${s.slug}`,
  provider: companies.filter((c) => c.services.includes(s.slug)).map(companyBusiness),
});

// "Towing in <Suburb>" — a Service scoped to the suburb, provided by the
// recommended operators. Reinforces the suburb + towing association.
export const suburbServiceSchema = (s: Suburb) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: `Tow truck ${s.name}`,
  serviceType: 'Towing service',
  description: s.metaDescription,
  url: `${site.url}/townsville/${s.slug}`,
  areaServed: {
    '@type': 'Place',
    name: `${s.name}, Townsville QLD${s.postcode ? ` ${s.postcode}` : ''}`,
    containedInPlace: townsville,
  },
  provider: companies.map(companyBusiness),
});

export const placeSchema = (s: Suburb) => ({
  '@context': 'https://schema.org',
  '@type': 'Place',
  name: `${s.name}, Townsville`,
  description: s.metaDescription,
  ...(s.postcode
    ? {
        address: {
          '@type': 'PostalAddress',
          addressLocality: s.name,
          postalCode: s.postcode,
          addressRegion: 'QLD',
          addressCountry: 'AU',
        },
      }
    : {}),
  containedInPlace: townsville,
});

export const articleSchema = (post: BlogPost) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: post.title,
  description: post.description,
  // Google's Article rich result requires an image; the posts have no hero
  // images, so use the site's 1200x630 social image.
  image: [`${site.url}${site.defaultOgImage}`],
  datePublished: post.date,
  dateModified: post.date,
  author:
    post.author === site.name || post.author === site.legacyName
      ? { '@type': 'Organization', name: site.name, url: site.url }
      : { '@type': 'Person', name: post.author },
  publisher: {
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    logo: { '@type': 'ImageObject', url: `${site.url}/hero/towing-townsville.png` },
  },
  mainEntityOfPage: `${site.url}/blog/${post.slug}`,
});

export const mechanicsItemListSchema = (
  mechanics: { position: number; name: string; description: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Top mechanics in Townsville',
  itemListOrder: 'https://schema.org/ItemListOrderAscending',
  itemListElement: mechanics.map((m) => ({
    '@type': 'ListItem',
    position: m.position,
    item: {
      '@type': 'AutoRepair',
      name: m.name,
      description: m.description,
      areaServed: 'Townsville, QLD',
    },
  })),
});
