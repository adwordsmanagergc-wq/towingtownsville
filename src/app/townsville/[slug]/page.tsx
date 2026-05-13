import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allSuburbSlugs, getSuburb, suburbs } from '@/data/suburbs';
import { services } from '@/data/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, placeSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return allSuburbSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const s = suburbs.find((x) => x.slug === params.slug);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/townsville/${s.slug}`,
  });
}

export default function SuburbPage({ params }: Params) {
  const suburb = suburbs.find((s) => s.slug === params.slug);
  if (!suburb) notFound();
  const neighbours = suburb.neighbouring
    .map((slug) => suburbs.find((x) => x.slug === slug))
    .filter(Boolean) as typeof suburbs;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Townsville', path: '/townsville' },
          { name: suburb.name, path: `/townsville/${suburb.slug}` },
        ])}
      />
      <JsonLd data={placeSchema(suburb)} />
      <JsonLd data={faqSchema(suburb.faqs)} />

      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Townsville', href: '/townsville' },
              { name: suburb.name, href: `/townsville/${suburb.slug}` },
            ]}
          />
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            Tow Truck in {suburb.name}, Townsville — Recommended Operators
          </h1>
          <p className="mt-4 text-slate-100/85 max-w-2xl">{suburb.metaDescription}</p>
        </div>
      </section>

      <article className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 prose-towing">
          <p className="text-[16.5px] leading-relaxed text-slate-700">{suburb.intro}</p>

          <h2>Common towing jobs in {suburb.name}</h2>
          <ul>
            {suburb.jobs.map((j, i) => (
              <li key={i}>{j}</li>
            ))}
          </ul>
        </div>
      </article>

      <RecommendedCompaniesBlock />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
              Tow truck Townsville services in {suburb.name}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-navy-800 hover:text-hivis-600 underline underline-offset-4"
                  >
                    {s.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
              Nearby towing Townsville suburbs
            </h2>
            <ul className="space-y-2">
              {neighbours.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/townsville/${n.slug}`}
                    className="text-navy-800 hover:text-hivis-600 underline underline-offset-4"
                  >
                    Tow truck {n.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/townsville"
                  className="font-semibold text-hivis-600 underline underline-offset-4"
                >
                  All towing Townsville suburbs →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Faq heading={`${suburb.name} towing — common questions.`} faqs={suburb.faqs} />
    </>
  );
}
