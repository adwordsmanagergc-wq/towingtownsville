import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import type { ServiceSlug } from '@/types';

const tileCopy: Partial<Record<ServiceSlug, { label: string; blurb: string }>> = {
  '24-7-emergency-towing': {
    label: '24/7 Emergency Towing',
    blurb: 'Round-the-clock callouts, anywhere in Townsville.',
  },
  'accident-towing': {
    label: 'Accident Towing',
    blurb: 'Insurance-approved, scene clean-up, secure storage.',
  },
  'breakdown-towing': {
    label: 'Breakdown Towing',
    blurb: "Engine trouble, won't-start, flat-battery rescues.",
  },
  'tilt-tray-towing': {
    label: 'Tilt Tray Towing',
    blurb: 'Damage-free transport for sedans, utes, 4WDs and prestige cars.',
  },
  'flatbed-towing': {
    label: 'Flatbed Towing',
    blurb: 'Long, low and stable for awkward loads.',
  },
  'heavy-haulage-towing': {
    label: 'Heavy Haulage Towing',
    blurb: 'Trucks, prime movers and large vehicles.',
  },
  '4wd-and-off-road-recovery': {
    label: '4WD & Off-Road Recovery',
    blurb: 'Bogged on the beach, stuck in soft sand, off-track recoveries.',
  },
  'motorbike-towing': {
    label: 'Motorbike Towing',
    blurb: 'Strapped, supported and safely transported.',
  },
  'prestige-and-luxury-vehicle-towing': {
    label: 'Prestige & Luxury Vehicle Towing',
    blurb: 'Low-profile, alloy-friendly, hand-loaded.',
  },
  'machinery-and-equipment-transport': {
    label: 'Machinery & Equipment Transport',
    blurb: 'Plant, scissor lifts, generators, mini-excavators.',
  },
  'boat-and-trailer-transport': {
    label: 'Boat & Trailer Transport',
    blurb: 'Tinnies, runabouts and trailers between ramps and storage.',
  },
  'interstate-and-long-distance-towing': {
    label: 'Interstate & Long-Distance Towing',
    blurb: 'Townsville to Cairns, Mackay, Brisbane and beyond.',
  },
};

const tileOrder: ServiceSlug[] = [
  '24-7-emergency-towing',
  'accident-towing',
  'breakdown-towing',
  'tilt-tray-towing',
  'flatbed-towing',
  'heavy-haulage-towing',
  '4wd-and-off-road-recovery',
  'motorbike-towing',
  'prestige-and-luxury-vehicle-towing',
  'machinery-and-equipment-transport',
  'boat-and-trailer-transport',
  'interstate-and-long-distance-towing',
];

export function ServiceGrid() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900">
            What kind of tow do you need?
          </h2>
          <p className="text-slate-700 mt-3 text-[15px]">
            Townsville's towing market covers far more than the broken-down sedan. Pick the
            service closest to your situation and we'll show you exactly what's involved — and
            which of our recommended operators handles it.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tileOrder.map((slug) => {
            const tile = tileCopy[slug]!;
            const exists = services.some((s) => s.slug === slug);
            if (!exists) return null;
            return (
              <li key={slug}>
                <Link
                  href={`/services/${slug}`}
                  className="block h-full rounded-xl border border-slate-100 bg-slate-50 p-5 hover:bg-white hover:shadow-card transition"
                >
                  <h3 className="font-display font-bold text-navy-900 text-lg mb-1">
                    {tile.label}
                  </h3>
                  <p className="text-sm text-slate-700">{tile.blurb}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-hivis-600">
                    See details <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-8">
          <Link href="/services" className="text-sm font-semibold text-navy-800 underline">
            See all Townsville tow truck services →
          </Link>
        </div>
      </div>
    </section>
  );
}
