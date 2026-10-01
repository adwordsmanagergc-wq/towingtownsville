import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock, DollarSign, Phone, ShieldCheck, Truck } from 'lucide-react';
import { companies } from '@/data/companies';
import { services } from '@/data/services';
import { PageHero } from '@/components/PageHero';
import { JsonLd } from '@/components/JsonLd';
import { telHref } from '@/components/CallButtons';
import { breadcrumbSchema, recommendedItemListSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Recommended Tow Truck Companies in Townsville',
  description:
    'The two Townsville towing companies we recommend most — Kwiktow NQ and ABC Towing Services — and exactly why each made the list.',
  path: '/recommended',
});

const serviceName = (slug: string) => services.find((s) => s.slug === slug)?.h1.replace(/ in Townsville$/i, '') || slug;

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

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Recommended', href: '/recommended' }]}
        eyebrow="Recommended operators"
        title="The Townsville towing companies we recommend most."
        intro="Two operators, two very different strengths. Here is exactly why each made the list — and which one to call for your job."
      >
        <nav aria-label="Operators" className="mt-7 flex flex-wrap gap-2">
          {companies.map((c, i) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/20"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-hivis text-[11px] text-navy-900">
                {i + 1}
              </span>
              {c.name}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 space-y-10">
          {companies.map((c, i) => {
            const stats = [
              { icon: Clock, label: 'Response', value: c.responseTime },
              { icon: Truck, label: 'Fleet', value: c.fleet },
              { icon: ShieldCheck, label: 'Insurance-approved', value: c.insuranceApproved ? 'Yes — works with major insurers' : 'No' },
              { icon: DollarSign, label: 'Pricing', value: c.pricingTransparency },
            ];
            return (
              <article
                key={c.slug}
                id={c.slug}
                className="scroll-mt-24 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-card"
              >
                <div className="flex flex-col gap-5 border-b border-slate-100 p-6 md:flex-row md:items-center md:justify-between md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100">
                      <Image src={c.logoSrc} alt={`${c.name} logo`} width={56} height={56} className="h-12 w-12 object-contain" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-hivis-600">
                        Recommendation #{i + 1}
                      </p>
                      <h2 className="font-display text-2xl md:text-3xl font-extrabold text-navy-900 leading-tight">
                        {c.name}
                      </h2>
                      <p className="text-sm text-slate-600 mt-0.5">Best for: {c.bestFitFor}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row md:flex-col lg:flex-row">
                    {c.phone && (
                      <a
                        href={telHref(c.phone)}
                        rel="nofollow"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-hivis px-5 py-3 font-bold text-navy-900 hover:bg-hivis-400"
                      >
                        <Phone className="h-4 w-4" /> {c.phone}
                      </a>
                    )}
                    <a
                      href={c.websiteUrl}
                      target="_blank"
                      rel="noopener nofollow sponsored"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy-800 px-5 py-3 font-semibold text-white hover:bg-navy-700"
                    >
                      Visit website <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1.4fr_1fr]">
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy-900">Why we recommend them</h3>
                    <p className="mt-2 text-[15.5px] leading-relaxed text-slate-700">{c.whyRecommended}</p>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-slate-700">{c.shortPitch}</p>

                    <h3 className="mt-6 font-display text-lg font-bold text-navy-900">Services</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {c.services.map((s) => (
                        <li key={s}>
                          <Link
                            href={`/services/${s}`}
                            className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-navy-800 hover:border-hivis hover:text-hivis-600"
                          >
                            <BadgeCheck className="h-3.5 w-3.5 text-hivis-600" aria-hidden /> {serviceName(s)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <dl className="grid h-max gap-3 sm:grid-cols-2 lg:grid-cols-1">
                    {stats.map((s) => (
                      <div key={s.label} className="flex gap-3 rounded-xl bg-slate-50 p-4">
                        <s.icon className="h-5 w-5 shrink-0 text-hivis-600 mt-0.5" aria-hidden />
                        <div>
                          <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{s.label}</dt>
                          <dd className="mt-0.5 text-sm font-medium text-navy-900">{s.value}</dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>
            );
          })}

          <p className="text-xs text-slate-600 max-w-3xl">
            Some recommendations on this site may be sponsored or affiliate placements. We only
            recommend operators we have vetted against our published comparison criteria.{' '}
            <Link href="/compare" className="underline hover:text-hivis-600">
              See how we compare
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
