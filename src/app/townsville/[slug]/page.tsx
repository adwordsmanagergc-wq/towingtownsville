import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { allSuburbSlugs, suburbRegions, suburbs } from '@/data/suburbs';
import { services } from '@/data/services';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButtons } from '@/components/CallButtons';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, faqSchema, placeSchema, suburbServiceSchema } from '@/lib/schema';
import { buildMetadata, suburbTitle } from '@/lib/seo';
import { toParagraphs } from '@/lib/text';

type Params = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return allSuburbSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const s = suburbs.find((x) => x.slug === params.slug);
  if (!s) return {};
  return buildMetadata({
    title: s.metaTitle || suburbTitle(s.name),
    description: s.metaDescription,
    path: `/townsville/${s.slug}`,
    ogTitle: `Tow Truck ${s.name} — 24/7 Towing in ${s.name}, Townsville`,
    extraKeywords: [
      `tow truck ${s.name}`,
      `towing ${s.name}`,
      `${s.name} tow truck`,
      `${s.name} towing`,
      `tow truck near ${s.name}`,
      ...(s.postcode ? [`tow truck ${s.postcode}`, `towing ${s.postcode}`] : []),
    ],
  });
}

// Services highlighted on every suburb page, phrased as suburb-level anchors.
const featuredServices = [
  '24-7-emergency-towing',
  'accident-towing',
  'breakdown-towing',
  'tilt-tray-towing',
  'heavy-haulage-towing',
  '4wd-and-off-road-recovery',
  'jump-start',
  'tyre-change-roadside-assist',
];

const shortServiceName: Record<string, string> = {
  '24-7-emergency-towing': '24/7 emergency towing',
  'accident-towing': 'Accident towing',
  'breakdown-towing': 'Breakdown towing',
  'tilt-tray-towing': 'Tilt tray towing',
  'heavy-haulage-towing': 'Heavy vehicle towing',
  '4wd-and-off-road-recovery': '4WD recovery',
  'jump-start': 'Jump starts',
  'tyre-change-roadside-assist': 'Flat tyre help',
};

export default function SuburbPage({ params }: Params) {
  const suburb = suburbs.find((s) => s.slug === params.slug);
  if (!suburb) notFound();

  const neighbours = suburb.neighbouring
    .map((slug) => suburbs.find((x) => x.slug === slug))
    .filter(Boolean) as typeof suburbs;
  const region = suburbRegions.find((r) => r.key === suburb.region);
  const sameRegion = suburbs
    .filter(
      (s) =>
        s.region === suburb.region &&
        s.slug !== suburb.slug &&
        !suburb.neighbouring.includes(s.slug),
    )
    .sort((a, b) => a.name.localeCompare(b.name));
  const outer = ['northern-beaches', 'rural-north', 'island-highway'].includes(suburb.region);
  const where = suburb.postcode ? `${suburb.name} QLD ${suburb.postcode}` : `${suburb.name}, Townsville`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Townsville suburbs', path: '/townsville' },
          { name: `Tow truck ${suburb.name}`, path: `/townsville/${suburb.slug}` },
        ])}
      />
      <JsonLd data={placeSchema(suburb)} />
      <JsonLd data={suburbServiceSchema(suburb)} />
      <JsonLd data={faqSchema(suburb.faqs)} />

      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(242,107,31,0.3),_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Suburbs', href: '/townsville' },
              { name: suburb.name, href: `/townsville/${suburb.slug}` },
            ]}
          />
          <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-hivis-400 mb-3">
            <MapPin className="h-3.5 w-3.5" aria-hidden /> {where}
            {region && <span className="hidden sm:inline text-slate-200/70 normal-case tracking-normal font-medium">· {region.label}</span>}
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight max-w-4xl">
            Tow Truck {suburb.name} — 24/7 Towing in {suburb.name}
          </h1>
          <p className="mt-4 text-lg text-slate-100/85 max-w-3xl">{suburb.metaDescription}</p>
          <CallButtons size="lg" className="mt-7" />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-100/80">
            <li className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-hivis-400" aria-hidden />
              {outer ? 'Outer-area callouts — allow extra travel time' : '~30 min typical metro response'}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-hivis-400" aria-hidden /> Insured, insurance-approved operators
            </li>
            <li className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-hivis-400" aria-hidden /> Tows to any Townsville mechanic
            </li>
          </ul>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 lg:grid-cols-[1fr_20rem]">
          <article className="prose-towing max-w-3xl">
            <h2 className="!mt-0">Towing in {suburb.name}: what to know</h2>
            {toParagraphs(suburb.intro).map((para, i) => (
              <p key={i} className="text-[16.5px] leading-relaxed text-slate-700">
                {para}
              </p>
            ))}

            <h2>Common tow truck jobs in {suburb.name}</h2>
            <ul className="!list-none !pl-0 grid gap-2">
              {suburb.jobs.map((j, i) => (
                <li key={i} className="flex gap-2.5 rounded-lg bg-slate-50 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-hivis-600 mt-0.5 shrink-0" aria-hidden />
                  <span>{j}</span>
                </li>
              ))}
            </ul>

            <h2>How to get a tow truck in {suburb.name}</h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700 text-[15.5px]">
              <li>
                <strong>Get safe first.</strong> Hazard lights on, out of traffic, and call 000 if anyone is
                hurt or the vehicle is blocking a live lane.
              </li>
              <li>
                <strong>Call a recommended operator</strong> using the buttons above and give your exact
                location in {suburb.name} — nearest cross street or landmark helps the driver find you.
              </li>
              <li>
                <strong>Describe the vehicle and problem</strong> — make, model, 2WD/4WD/AWD, whether it
                rolls and steers, and if it&apos;s in a carpark, driveway or soft ground.
              </li>
              <li>
                <strong>Tell them where it&apos;s going</strong> — your mechanic, home, a smash repairer or the
                insurer&apos;s assessor. Ask for the quote before the truck is dispatched.
              </li>
            </ol>
          </article>

          <aside className="lg:sticky lg:top-24 h-max space-y-4">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h2 className="font-display font-bold text-navy-900 text-lg">
                {suburb.name} towing at a glance
              </h2>
              <dl className="mt-3 space-y-2 text-sm">
                {suburb.postcode && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-600">Postcode</dt>
                    <dd className="font-semibold text-navy-900">{suburb.postcode}</dd>
                  </div>
                )}
                {region && (
                  <div className="flex justify-between gap-4">
                    <dt className="text-slate-600">Area</dt>
                    <dd className="font-semibold text-navy-900 text-right">{region.label}</dd>
                  </div>
                )}
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-600">Availability</dt>
                  <dd className="font-semibold text-navy-900">24 hours, 7 days</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-600">Standard tow</dt>
                  <dd className="font-semibold text-navy-900">from ~$150–$300</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-2xl bg-navy-800 p-5 text-white">
              <p className="font-display font-bold text-lg">Stuck in {suburb.name} right now?</p>
              <p className="text-sm text-slate-100/80 mt-1 mb-4">Tap to call — both lines answer 24/7.</p>
              <CallButtons className="!flex-col" />
            </div>
          </aside>
        </div>
      </section>

      <RecommendedCompaniesBlock />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-6">
            Tow truck services in {suburb.name}
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((slug) => {
              const svc = services.find((s) => s.slug === slug);
              if (!svc) return null;
              return (
                <li key={slug}>
                  <Link
                    href={`/services/${slug}`}
                    className="group flex h-full items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3.5 font-semibold text-navy-900 hover:bg-white hover:shadow-card transition"
                  >
                    <span>
                      {shortServiceName[slug]} <span className="font-normal text-slate-600">{suburb.name}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-hivis-600 transition group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mt-4 text-sm">
            <Link href="/services" className="font-semibold text-hivis-600 underline underline-offset-4">
              See all {services.length} Townsville towing services →
            </Link>
          </p>
        </div>
      </section>

      <Faq heading={`Tow truck ${suburb.name} — common questions`} faqs={suburb.faqs} className="!bg-slate-50" />

      <section className="py-14 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
              Towing near {suburb.name}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {neighbours.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/townsville/${n.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy-800 hover:border-hivis hover:text-hivis-600"
                  >
                    Tow truck {n.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {sameRegion.length > 0 && region && (
            <div>
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
                Also in {region.label}
              </h2>
              <ul className="flex flex-wrap gap-2">
                {sameRegion.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/townsville/${n.slug}`}
                      className="inline-flex rounded-full bg-slate-50 px-3.5 py-1.5 text-sm text-navy-800 hover:text-hivis-600"
                    >
                      {n.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="mx-auto max-w-6xl px-4 mt-8">
          <Link href="/townsville" className="font-semibold text-hivis-600 underline underline-offset-4">
            All towing Townsville suburbs →
          </Link>
        </div>
      </section>
    </>
  );
}
