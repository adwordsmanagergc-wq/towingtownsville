import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { suburbs, suburbsByRegion } from '@/data/suburbs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButtons } from '@/components/CallButtons';
import { SuburbFinder } from '@/components/SuburbFinder';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/config/site';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';

export const metadata: Metadata = buildMetadata({
  title: 'Tow Truck Townsville Suburbs | Towing in Every Townsville Suburb',
  description: `Towing Townsville suburb by suburb — 24/7 tow trucks for all ${suburbs.length} areas from the CBD and Aitkenvale to Kirwan, Douglas and the Northern Beaches.`,
  path: '/townsville',
  extraKeywords: suburbs.slice(0, 20).map((s) => `tow truck ${s.name}`),
});

const finderItems = suburbs.map(({ slug, name, postcode }) => ({ slug, name, postcode }));

export default function TownsvilleHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Townsville suburbs', path: '/townsville' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Tow truck Townsville — suburbs covered',
          numberOfItems: suburbs.length,
          itemListElement: suburbs.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: `Tow truck ${s.name}`,
            url: `${site.url}/townsville/${s.slug}`,
          })),
        }}
      />
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(242,107,31,0.3),_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Suburbs', href: '/townsville' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight max-w-3xl">
            Tow truck Townsville — every suburb covered.
          </h1>
          <p className="mt-4 text-lg text-slate-100/85 max-w-2xl">
            The same recommended 24/7 operators service all {suburbs.length} areas below. Search your
            suburb or postcode for local towing advice, typical jobs and FAQs — or just call.
          </p>
          <SuburbFinder suburbs={finderItems} className="mt-7" />
          <CallButtons className="mt-6" />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <nav aria-label="Jump to area" className="mb-10 flex flex-wrap gap-2">
            {suburbsByRegion.map((r) => (
              <a
                key={r.key}
                href={`#${r.key}`}
                className="rounded-full border border-slate-200 px-3.5 py-1.5 text-sm font-medium text-navy-800 hover:border-hivis hover:text-hivis-600"
              >
                {r.label} <span className="text-slate-500">({r.suburbs.length})</span>
              </a>
            ))}
          </nav>

          <div className="space-y-12">
            {suburbsByRegion.map((r) => (
              <section key={r.key} id={r.key} className="scroll-mt-24">
                <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900">
                  Towing {r.label}
                </h2>
                <p className="text-slate-600 mt-1 mb-5">{r.blurb}</p>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {r.suburbs.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/townsville/${s.slug}`}
                        className="group flex h-full flex-col rounded-xl border border-slate-100 bg-slate-50 p-5 hover:bg-white hover:shadow-card hover:border-slate-200 transition"
                      >
                        <span className="flex items-baseline justify-between gap-2">
                          <span className="font-display font-bold text-navy-900 text-lg">
                            Tow truck {s.name}
                          </span>
                          {s.postcode && (
                            <span className="text-xs font-semibold text-slate-500">{s.postcode}</span>
                          )}
                        </span>
                        <span className="text-sm text-slate-700 mt-2 line-clamp-2">{s.metaDescription}</span>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-hivis-600">
                          Towing in {s.name}
                          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" aria-hidden />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <RecommendedCompaniesBlock />
    </>
  );
}
