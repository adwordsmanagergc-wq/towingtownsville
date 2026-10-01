import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, Clock, DollarSign, ShieldCheck, Star, Truck, BadgeCheck } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { CallButtons } from '@/components/CallButtons';
import { CompareTable } from '@/components/CompareTable';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema, recommendedItemListSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { companies } from '@/data/companies';

export const metadata: Metadata = buildMetadata({
  title: 'How We Compare Towing Companies in Townsville',
  description:
    'Our 6-point framework for comparing towing companies in Townsville — insurance, fleet, response time, reviews, transparency and insurance-approved status.',
  path: '/compare',
  ogTitle: "How We Compare Townsville's Towing Companies",
  ogDescription:
    'Insurance, fleet, response time, reviews — the criteria we use before we recommend any tow operator.',
});

const criteria = [
  {
    icon: ShieldCheck,
    title: 'Insurance & licensing',
    body: "Full public liability and goods-in-transit insurance, plus the licences for the trucks they run. Operators who can't produce a current certificate of currency on request don't make the list.",
  },
  {
    icon: Truck,
    title: 'Fleet & equipment',
    body: 'The right truck for the right job:',
    points: [
      'Tilt trays for damage-free car and prestige moves',
      'Heavy rigs for trucks, prime movers and big 4WDs',
      'Gear for NQ conditions — sand, wet season, machinery',
    ],
  },
  {
    icon: Clock,
    title: '24/7 availability & response',
    body: 'A tow truck that "usually" answers after hours isn\'t a tow truck. We look at:',
    points: [
      'True 24/7 phone availability',
      'Average response across urban Townsville',
      'Peak nights — long weekends, wet season, events',
    ],
  },
  {
    icon: Star,
    title: 'Reviews & reputation',
    body: 'Volume, consistency and how the operator handles the hard reviews. We weight well-reviewed Google profiles more heavily and read what customers say about accidents, after-hours and heavy jobs.',
  },
  {
    icon: DollarSign,
    title: 'Pricing transparency',
    body: "A clear quote upfront and the same number on the invoice. We avoid any operator with a pattern of disputed or inflated invoices.",
  },
  {
    icon: BadgeCheck,
    title: 'Insurance-approved status',
    body: "Being on major Australian insurers' panels means the paperwork is in order and accident handling meets a recognised standard. Both recommended companies meet this bar.",
  },
];

export default function ComparePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Compare', path: '/compare' },
        ])}
      />
      <JsonLd data={recommendedItemListSchema(companies)} />

      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Compare', href: '/compare' }]}
        eyebrow="Comparison framework"
        title="How we compare towing companies in Townsville."
        intro="Anyone can put a tow truck on Facebook Marketplace. We don't recommend an operator until they've passed all six of the checks below — and we keep checking."
      />

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-3xl prose-towing">
            <p>
              When something goes wrong on the road, you don&apos;t have time to triage which tow
              company to call. That&apos;s why this site exists: to do the homework once, properly,
              so you can ring someone you can trust and get on with your day.
            </p>
            <p>
              We score every Townsville operator we research against the same six criteria. The
              two companies on our home page — Kwiktow NQ and ABC Towing Services — are the
              operators we currently recommend most. Here is exactly how we got there.
            </p>
          </div>

          <h2 className="mt-12 font-display text-2xl md:text-3xl font-bold text-navy-900">
            The 6-criteria framework
          </h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {criteria.map((c, i) => (
              <li key={c.title} className="relative rounded-2xl border border-slate-100 bg-slate-50 p-6">
                <span className="absolute right-5 top-5 font-display text-4xl font-extrabold text-slate-200">
                  {i + 1}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-hivis/15">
                  <c.icon className="h-6 w-6 text-hivis-600" aria-hidden />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{c.body}</p>
                {c.points && (
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-hivis-600 mt-0.5" aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-6">
            Side-by-side comparison
          </h2>
          <CompareTable />
          <p className="text-xs text-slate-700 mt-3">
            Both external links open in a new tab. Operator details current at time of
            publication; please confirm specifics directly with the operator.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900">Why these two?</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-hivis-600">Speed &amp; breadth</p>
              <h3 className="mt-1 font-display text-xl font-bold text-navy-900">Kwiktow NQ</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                A true 24/7 service covering tilt-tray, accident, breakdown, 4WD, heavy, machinery
                and boat-trailer recovery across Townsville and wider North Queensland, with an
                advertised 30-minute average response time and a strong review profile. If your
                day has gone sideways and you need someone now, this is who we tell people to ring.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-hivis-600">Heavy &amp; planned jobs</p>
              <h3 className="mt-1 font-display text-xl font-bold text-navy-900">ABC Towing Services</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                Fleet weight and operational maturity — a Townsville-based heavy-tow operator with
                a proper booking flow, direct call and email pathways, and the kind of recovery
                gear most local outfits don&apos;t run. If your job is big, awkward or planned in
                advance, this is the team we&apos;d call first.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6 max-w-3xl">
            <h2 className="font-display text-lg font-bold text-navy-900">Disclosure</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              We may receive a referral fee or sponsorship from operators featured on this site.
              We do not accept paid placements from operators that fail our six-criteria
              framework, and we&apos;ll always tell you when a relationship is commercial.{' '}
              <Link href="/contact" className="font-semibold underline">Contact us</Link> if you
              operate a tow company in Townsville and want to be considered.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 bg-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Need a tow truck right now?</h2>
          <p className="mt-2 text-slate-100/80">Both recommended operators answer 24/7.</p>
          <CallButtons size="lg" className="mt-6" />
        </div>
      </section>
    </>
  );
}
