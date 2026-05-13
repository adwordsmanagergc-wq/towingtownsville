export type ServiceSlug =
  | '24-7-emergency-towing'
  | 'accident-towing'
  | 'breakdown-towing'
  | 'tilt-tray-towing'
  | 'flatbed-towing'
  | 'heavy-haulage-towing'
  | '4wd-and-off-road-recovery'
  | 'motorbike-towing'
  | 'prestige-and-luxury-vehicle-towing'
  | 'machinery-and-equipment-transport'
  | 'boat-and-trailer-transport'
  | 'interstate-and-long-distance-towing'
  | 'jump-start'
  | 'lockout-service'
  | 'fuel-delivery'
  | 'tyre-change-roadside-assist'
  | 'insurance-towing'
  | 'abandoned-vehicle-removal';

export type CompanySlug = 'abc-towing' | 'kwiktow-nq';

export type Faq = { q: string; a: string };

export type TowingCompany = {
  slug: CompanySlug;
  name: string;
  logoSrc: string;
  websiteUrl: string;
  phone?: string;
  email?: string;
  townsvilleBased: boolean;
  available247: boolean;
  services: ServiceSlug[];
  badges: string[];
  shortPitch: string;
  whyRecommended: string;
  // Fields used by the comparison table.
  fleet: string;
  responseTime: string;
  insuranceApproved: boolean;
  pricingTransparency: 'High' | 'Medium' | 'Quote on call';
  reviewsSummary: string;
  cardHeadline: string;
  bestFitFor: string;
};

export type ServicePage = {
  slug: ServiceSlug;
  category: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string; // 150–250 word paragraph, plain text (Markdown not required).
  included: string[];
  scenarios: string[];
  vehiclesOrEquipment?: string[];
  faqs: Faq[];
  related?: ServiceSlug[];
};

export type Suburb = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  jobs: string[];
  neighbouring: string[];
  faqs: Faq[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  author: string;
  readMinutes: number;
  body: string; // markdown
  // Optional structured data for rich results.
  faqs?: Faq[];
  mechanics?: { position: number; name: string; description: string }[];
};
