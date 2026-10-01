import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getService, services, allServiceSlugs } from '@/data/services';
import { suburbsByRegion } from '@/data/suburbs';
import { CallButtons } from '@/components/CallButtons';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { toParagraphs } from '@/lib/text';

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
          <CallButtons size="lg" className="mt-7" />
          <Link
            href="#recommended-inline"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-100/90 underline underline-offset-4 hover:text-hivis-400"
          >
            Compare the recommended operators <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <article className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 prose-towing">
          {toParagraphs(service.intro).map((para, i) => (
            <p key={i} className="text-[16.5px] leading-relaxed text-slate-700">
              {para}
            </p>
          ))}

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

      {related.length > 0 && (
        <section className="py-14 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
              Related Townsville towing services
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="flex items-center justify-between gap-2 rounded-xl border border-slate-100 bg-white px-4 py-3.5 font-semibold text-navy-900 hover:shadow-card transition"
                  >
                    {r.h1} <ArrowRight className="h-4 w-4 text-hivis-600 shrink-0" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900">
            {service.h1} — every Townsville suburb
          </h2>
          <p className="text-slate-700 mt-2 mb-8 max-w-3xl">
            The recommended operators cover this service right across Townsville. Pick your suburb
            for local access tips and FAQs.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {suburbsByRegion.map((r) => (
              <div key={r.key}>
                <h3 className="font-semibold text-xs uppercase tracking-wider text-hivis-600 mb-2">
                  {r.label}
                </h3>
                <ul className="space-y-1 text-sm">
                  {r.suburbs.map((su) => (
                    <li key={su.slug}>
                      <Link
                        href={`/townsville/${su.slug}`}
                        className="text-navy-800 hover:text-hivis-600 hover:underline underline-offset-4"
                      >
                        Tow truck {su.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
