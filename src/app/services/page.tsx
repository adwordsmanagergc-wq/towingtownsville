import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Tow Truck Services in Townsville | Every Type of Towing Explained',
  description:
    'Browse every type of tow service available in Townsville — emergency, accident, breakdown, tilt tray, heavy, 4WD recovery and roadside assist.',
  path: '/services',
});

const categories = Array.from(new Set(services.map((s) => s.category)));

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Every type of tow service in Townsville.
          </h1>
          <p className="mt-4 text-slate-100/80 max-w-2xl">
            From a flat tyre on the Ring Road to a prime mover on the Bruce Highway — pick the
            service closest to your situation.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          {categories.map((cat) => (
            <div key={cat}>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">{cat}</h2>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {services
                  .filter((s) => s.category === cat)
                  .map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="block h-full rounded-xl border border-slate-100 bg-slate-50 p-5 hover:bg-white hover:shadow-card transition"
                      >
                        <h3 className="font-display font-bold text-navy-900 text-lg leading-tight">
                          {s.h1.replace(' in Townsville', '').replace(' from Townsville', '')}
                        </h3>
                        <p className="text-sm text-slate-700 mt-2 line-clamp-3">
                          {s.metaDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-3 text-sm font-semibold text-hivis-600">
                          See details <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <RecommendedCompaniesBlock />
    </>
  );
}
