import Link from 'next/link';
import type { Metadata } from 'next';
import { suburbs } from '@/data/suburbs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';

export const metadata: Metadata = buildMetadata({
  title: 'Tow Truck Townsville Suburbs | Local Towing Coverage',
  description:
    'Local towing guides for every Townsville suburb — Aitkenvale, Kirwan, Garbutt, Idalia, The Strand, Magnetic Island and more.',
  path: '/townsville',
});

export default function TownsvilleHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Townsville', path: '/townsville' },
        ])}
      />
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Townsville', href: '/townsville' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Tow truck coverage across Townsville.
          </h1>
          <p className="mt-4 text-slate-100/85 max-w-2xl">
            Same recommended operators, every postcode. Pick a suburb to see local jobs, FAQs
            and the operators we recommend.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suburbs.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/townsville/${s.slug}`}
                  className="block h-full rounded-xl border border-slate-100 bg-slate-50 p-5 hover:bg-white hover:shadow-card transition"
                >
                  <h2 className="font-display font-bold text-navy-900 text-lg">{s.name}</h2>
                  <p className="text-sm text-slate-700 mt-2 line-clamp-3">{s.metaDescription}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RecommendedCompaniesBlock />
    </>
  );
}
