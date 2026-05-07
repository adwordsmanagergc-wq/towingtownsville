import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { companies } from '@/data/companies';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import {
  breadcrumbSchema,
  recommendedItemListSchema,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Recommended Tow Truck Companies in Townsville',
  description:
    'The two Townsville towing companies we recommend most — ABC Towing Services and Kwiktow NQ — and exactly why each made the list.',
  path: '/recommended',
});

export default function RecommendedPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Recommended', path: '/recommended' },
        ])}
      />
      <JsonLd data={recommendedItemListSchema(companies)} />

      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Recommended', href: '/recommended' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            The Townsville towing companies we recommend most.
          </h1>
          <p className="mt-4 text-slate-100/85 max-w-2xl">
            Two operators, two very different strengths. Here is exactly why each made the list,
            and what we'd call them for.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 space-y-14">
          {companies.map((c) => (
            <article key={c.slug} id={c.slug} className="scroll-mt-24">
              <p className="text-xs uppercase tracking-[0.25em] text-hivis-600 font-bold">
                Recommended Operator
              </p>
              <h2 className="font-display text-3xl font-bold text-navy-900 mt-2">
                {c.cardHeadline}
              </h2>
              <p className="mt-3 text-slate-700 text-[16px] leading-relaxed">{c.shortPitch}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 text-sm">
                <div>
                  <p className="font-semibold text-navy-900">Fleet</p>
                  <p className="text-slate-700">{c.fleet}</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Response</p>
                  <p className="text-slate-700">{c.responseTime}</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Insurance-approved</p>
                  <p className="text-slate-700">{c.insuranceApproved ? 'Yes' : 'No'}</p>
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Pricing transparency</p>
                  <p className="text-slate-700">{c.pricingTransparency}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-semibold text-navy-900">Best fit for</p>
                  <p className="text-slate-700">{c.bestFitFor}</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-semibold text-navy-900">Why we recommend them</p>
                  <p className="text-slate-700">{c.whyRecommended}</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href={c.websiteUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center gap-2 bg-hivis text-navy-900 font-semibold px-5 py-3 rounded-md hover:bg-hivis-400 transition"
                >
                  Visit {c.name} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs text-slate-700">
            Some recommendations on this site may be sponsored or affiliate placements. We only
            recommend operators we have personally vetted against our published comparison
            criteria.{' '}
            <Link href="/compare" className="underline hover:text-hivis-600">
              See how we compare.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
