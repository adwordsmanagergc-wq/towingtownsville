import type { TowingCompany } from '@/types';

export const companies: TowingCompany[] = [
  {
    slug: 'abc-towing',
    name: 'ABC Towing Services',
    logoSrc: '/recommended/abc-towing.svg',
    websiteUrl: 'https://www.abcctowingservices.com/',
    townsvilleBased: true,
    available247: true,
    services: [
      'heavy-haulage-towing',
      'tilt-tray-towing',
      'accident-towing',
      'breakdown-towing',
      'machinery-and-equipment-transport',
      'interstate-and-long-distance-towing',
    ],
    badges: ['Heavy Recovery', 'Tilt Tray', 'Online Bookings', 'Email & Call 24/7', 'Townsville-Based'],
    shortPitch:
      'A Townsville-based operator running heavy recovery rigs and tilt-tray trucks across North Queensland. ABC Towing is the team we point people to when the job is bigger than a passenger car — prime movers, heavy machinery and large-vehicle recoveries handled by crews who know the gear and know the region.',
    whyRecommended:
      'ABC Towing Services is one of the few Townsville operators with serious heavy-recovery capacity alongside a standard tilt-tray fleet. They publish booking, email and phone contact channels openly and operate across North Queensland — useful when the job is bigger than a single sedan or needs a long-distance leg out of town. They are locally based, so they understand the highways, suburbs and yards where most Townsville recoveries actually happen.',
    fleet: 'Heavy recovery, tilt tray, accident & breakdown rigs',
    responseTime: 'On-call 24/7, Townsville metro priority',
    insuranceApproved: true,
    pricingTransparency: 'Quote on call',
    reviewsSummary: 'Local operator with strong word-of-mouth in the heavy-vehicle and trade community',
    cardHeadline: "ABC Towing Services — Townsville's Heavy Tow Specialists",
    bestFitFor: 'Heavy vehicles, large-vehicle recoveries, planned/booked jobs',
  },
  {
    slug: 'kwiktow-nq',
    name: 'Kwiktow NQ',
    logoSrc: '/recommended/kwiktow.svg',
    websiteUrl: 'https://kwiktownq.com/',
    phone: '0409 739 332',
    townsvilleBased: true,
    available247: true,
    services: [
      '24-7-emergency-towing',
      'tilt-tray-towing',
      'accident-towing',
      'breakdown-towing',
      '4wd-and-off-road-recovery',
      'heavy-haulage-towing',
      'machinery-and-equipment-transport',
      'boat-and-trailer-transport',
      'interstate-and-long-distance-towing',
      'jump-start',
      'lockout-service',
      'fuel-delivery',
      'tyre-change-roadside-assist',
      'insurance-towing',
    ],
    badges: ['24/7 Response', 'Tilt Tray', 'Accident & Breakdown', '4WD Recovery', 'Heavy & Machinery', 'Boat & Trailer'],
    shortPitch:
      "Round-the-clock tilt tray, accident, breakdown, 4WD, heavy, machinery and boat-trailer transport across Townsville and the wider NQ region. Insurance-approved, fully licensed, and built around fast response — they advertise a 30-minute average response time across Townsville and back it up with a strong review profile.",
    whyRecommended:
      "Kwiktow NQ is the broadest single-operator pick in Townsville. They cover almost every category in our service list — from a flat-tyre roadside callout in Aitkenvale to 4WD recovery off Pallarenda, heavy machinery floats and interstate moves. The published ~30-minute average response time across the Townsville metro is realistic for the area and they are reachable on 0409 739 332 around the clock.",
    fleet: 'Tilt tray, heavy, 4WD recovery, machinery floats, boat/trailer',
    responseTime: '~30 min average across Townsville metro',
    insuranceApproved: true,
    pricingTransparency: 'Quote on call',
    reviewsSummary: 'Consistent positive feedback for fast 24/7 response and damage-free tilt-tray work',
    cardHeadline: "Kwiktow NQ — Townsville's Fastest 24/7 Towing & Recovery",
    bestFitFor: 'Round-the-clock accident, breakdown and multi-service jobs across NQ',
  },
];

export const getCompany = (slug: TowingCompany['slug']) =>
  companies.find((c) => c.slug === slug)!;
