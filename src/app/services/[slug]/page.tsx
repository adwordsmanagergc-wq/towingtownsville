import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getService, services, allServiceSlugs } from '@/data/services';
import { suburbs } from '@/data/suburbs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return allServiceSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle,
    description: s.metaDescription,
    path: `/services/${s.slug}`,
  });
}

export default function ServicePage({ params }: Params) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) notFound();
  const related = (service.related || []).map((r) => getService(r));
  const nearbySuburbs = suburbs.slice(0, 4);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.h1, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: service.h1, href: `/services/${service.slug}` },
            ]}
          />
          <p className="text-xs uppercase tracking-[0.25em] text-hivis-400 font-bold mb-3">
            {service.category}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            {service.h1}
          </h1>
          <p className="mt-4 text-slate-100/85 text-lg max-w-2xl">{service.metaDescription}</p>
          <div className="mt-6">
            <Link
              href="#recommended-inline"
              className="inline-flex items-center gap-2 bg-hivis text-navy-900 font-semibold px-5 py-3 rounded-md hover:bg-hivis-400 transition"
            >
              See Recommended Operators <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <article className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 prose-towing">
          <p className="text-[16.5px] leading-relaxed text-slate-700">{service.intro}</p>

          <h2>What's included</h2>
          <ul>
            {service.included.map((item, i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="h-5 w-5 text-hivis-600 mt-0.5 shrink-0" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2>Common Townsville scenarios</h2>
          <ul>
            {service.scenarios.map((sc, i) => (
              <li key={i}>{sc}</li>
            ))}
          </ul>
        </div>
      </article>

      <RecommendedCompaniesBlock id="recommended-inline" />

      <Faq heading={`${service.h1} — common questions.`} faqs={service.faqs} />

      {(related.length > 0 || nearbySuburbs.length > 0) && (
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
            {related.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
                  Related Townsville towing services
                </h2>
                <ul className="space-y-2">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="text-navy-800 hover:text-hivis-600 underline underline-offset-4"
                      >
                        {r.h1}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {nearbySuburbs.length > 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
                  Tow truck Townsville — suburbs we cover
                </h2>
                <ul className="grid grid-cols-2 gap-2">
                  {nearbySuburbs.map((su) => (
                    <li key={su.slug}>
                      <Link
                        href={`/townsville/${su.slug}`}
                        className="text-navy-800 hover:text-hivis-600 underline underline-offset-4"
                      >
                        Tow truck {su.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      href="/townsville"
                      className="font-semibold text-hivis-600 underline underline-offset-4"
                    >
                      All tow truck Townsville suburbs →
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
