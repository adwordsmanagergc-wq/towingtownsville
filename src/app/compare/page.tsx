import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CompareTable } from '@/components/CompareTable';
import { JsonLd } from '@/components/JsonLd';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';
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

      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Compare', href: '/compare' }]} />
          <p className="text-xs uppercase tracking-[0.25em] text-hivis-400 font-bold mb-3">
            Comparison Framework
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            How we compare towing companies in Townsville.
          </h1>
          <p className="mt-4 text-slate-100/85 max-w-2xl text-lg">
            Anyone can put a tow truck on Facebook Marketplace. We don't recommend an operator
            until they've passed all six of the checks below — and we keep checking.
          </p>
        </div>
      </section>

      <article className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 prose-towing">
          <p>
            When something goes wrong on the road, you don't have time to triage which tow
            company to call. That's why this site exists: to do the homework once, properly, so
            you can ring someone you can trust and get on with your day.
          </p>
          <p>
            We score every Townsville operator we research against the same six criteria. The
            two companies on our home page — ABC Towing Services and Kwiktow NQ — are the
            operators we currently recommend most. The framework below is exactly how we got
            there.
          </p>

          <h2>The 6-Criteria Framework</h2>

          <h3>1. Insurance &amp; Licensing</h3>
          <p>
            A tow operator must hold full public liability and goods-in-transit insurance, and
            the licences appropriate to the trucks they run. Operators who can't (or won't)
            produce a current certificate of currency on request don't make the list.
          </p>

          <h3>2. Fleet &amp; Equipment</h3>
          <p>The right truck for the right job. We look for:</p>
          <ul>
            <li>Tilt trays for damage-free passenger and prestige vehicle moves.</li>
            <li>Heavy recovery rigs for trucks, prime movers and large 4WDs.</li>
            <li>
              Recovery gear suited to North Queensland conditions — soft sand, beach work,
              wet-season recoveries, machinery transport.
            </li>
          </ul>

          <h3>3. 24/7 Availability &amp; Response Time</h3>
          <p>A tow truck that "usually" answers after hours isn't a tow truck. We track:</p>
          <ul>
            <li>True 24/7 phone availability.</li>
            <li>Average response time across the Townsville urban area.</li>
            <li>How operators handle peak-load nights (long weekends, wet season, major events).</li>
          </ul>

          <h3>4. Reviews &amp; Reputation</h3>
          <p>
            Volume, consistency and how the operator handles the hard reviews — not the easy
            ones. We weight Google ratings with at least 50 reviews more highly than thinly
            reviewed competitors, and we read what customers say about the difficult jobs
            (accidents, after-hours, heavy recovery).
          </p>

          <h3>5. Pricing Transparency</h3>
          <p>
            Reputable operators give you a clear quote upfront and don't change the number on
            the invoice. We avoid recommending any operator with a pattern of disputed or
            inflated invoices.
          </p>

          <h3>6. Insurance-Approved Status</h3>
          <p>
            Being on the panel for major Australian insurers signals two things: the operator's
            paperwork is in order, and their handling of accident jobs is held to a recognised
            standard. Both our recommended companies meet this bar.
          </p>
        </div>
      </article>

      <section className="py-10 md:py-14 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 mb-6">
            Side-by-Side Comparison
          </h2>
          <CompareTable />
          <p className="text-xs text-slate-700 mt-3">
            Both external links open in a new tab. Operator details current at time of
            publication; please confirm specifics directly with the operator.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 prose-towing">
          <h2>Why these two?</h2>
          <p>
            <strong>ABC Towing Services</strong> earns its place because of fleet weight and
            operational maturity — a Townsville-based heavy-tow operator with a proper booking
            flow, direct call and email pathways, and the kind of recovery gear most local
            outfits don't run. If your job is big, awkward, or planned in advance, this is the
            team we'd call first.
          </p>
          <p>
            <strong>Kwiktow NQ</strong> earns its place on speed and breadth — a true 24/7
            service that covers tilt-tray, accident, breakdown, 4WD, heavy, machinery and
            boat-trailer recovery across Townsville and wider North Queensland, with an
            advertised 30-minute average response time and a strong review profile. If your day
            has gone sideways and you need someone now, this is who we tell people to ring.
          </p>

          <h2>Disclosure</h2>
          <p>
            We may receive a referral fee or sponsorship from operators featured on this site.
            We do not accept paid placements from operators that fail our six-criteria
            framework, and we'll always tell you when a relationship is commercial. The
            recommendation logic above is the same one we'd use if no money changed hands.
          </p>
          <p>
            <Link href="/contact" className="underline">Contact us</Link> if you operate a tow
            company in Townsville and want to be considered for the comparison.
          </p>
        </div>
      </section>

      <section className="py-10 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900">
            Need a tow truck right now?
          </h2>
        </div>
      </section>
      <RecommendedCompaniesBlock showHeading={false} />
    </>
  );
}
