import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, Phone } from 'lucide-react';
import { companies } from '@/data/companies';
import type { TowingCompany } from '@/types';
import { cn } from '@/lib/cn';

type Variant = 'full' | 'compact';

type Props = {
  variant?: Variant;
  showHeading?: boolean;
  showDisclosure?: boolean;
  id?: string;
  className?: string;
};

const cardCopy: Record<TowingCompany['slug'], { headline: string; body: string }> = {
  'abc-towing': {
    headline: "ABC Towing Services — Townsville's Heavy Tow Specialists",
    body: 'A Townsville-based operator running heavy recovery rigs and tilt-tray trucks across North Queensland. ABC Towing is the team we point people to when the job is bigger than a passenger car — prime movers, heavy machinery and large-vehicle recoveries handled by crews who know the gear and know the region.',
  },
  'kwiktow-nq': {
    headline: "Kwiktow NQ — Townsville's Fastest 24/7 Towing & Recovery",
    body: 'Round-the-clock tilt tray, accident, breakdown, 4WD, heavy, machinery and boat-trailer transport across Townsville and the wider NQ region. Insurance-approved, fully licensed, and built around fast response — they advertise a 30-minute average response time across Townsville and back it up with a strong review profile.',
  },
};

function CompanyCard({
  company,
  variant,
}: {
  company: TowingCompany;
  variant: Variant;
}) {
  const copy = cardCopy[company.slug];
  return (
    <article
      id={company.slug}
      className={cn(
        'group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden h-full',
      )}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-5">
          <div className="relative h-14 w-14 shrink-0 rounded-md bg-slate-50 flex items-center justify-center overflow-hidden">
            <Image
              src={company.logoSrc}
              alt={`${company.name} logo`}
              width={56}
              height={56}
              className="h-12 w-12 object-contain"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-hivis-600 font-semibold">
              Recommended
            </p>
            <h3 className="font-display text-xl md:text-2xl font-bold text-navy-900 leading-tight">
              {copy.headline}
            </h3>
          </div>
        </div>
        {variant === 'full' && (
          <p className="text-slate-700 text-[15px] leading-relaxed mb-5">{copy.body}</p>
        )}
        <ul className="flex flex-wrap gap-2 mb-5" aria-label={`${company.name} highlights`}>
          {company.badges.map((b) => (
            <li
              key={b}
              className="inline-flex items-center gap-1 text-xs font-medium bg-slate-50 text-navy-800 rounded-full px-3 py-1 border border-slate-100"
            >
              <BadgeCheck className="h-3.5 w-3.5 text-hivis-600" /> {b}
            </li>
          ))}
        </ul>
        {company.phone && (
          <p className="text-sm text-navy-800 mb-4 inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-hivis-600" />
            <a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="font-semibold hover:underline">
              Call {company.phone}
            </a>
          </p>
        )}
        <div className="mt-auto flex flex-wrap items-center gap-3">
          <a
            href={company.websiteUrl}
            target="_blank"
            rel="noopener nofollow sponsored"
            className="inline-flex items-center gap-2 bg-hivis text-navy-900 font-semibold px-5 py-3 rounded-md hover:bg-hivis-400 transition"
          >
            Visit {company.name} <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href={`/recommended#${company.slug}`}
            className="text-sm font-semibold text-navy-800 hover:text-hivis-600 underline underline-offset-4"
          >
            Why we recommend them →
          </Link>
        </div>
      </div>
    </article>
  );
}

export function RecommendedCompaniesBlock({
  variant = 'full',
  showHeading = true,
  showDisclosure = true,
  id,
  className,
}: Props) {
  return (
    <section id={id} className={cn('py-14 md:py-20 bg-slate-50', className)}>
      <div className="mx-auto max-w-6xl px-4">
        {showHeading && (
          <div className="max-w-3xl mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-hivis-600 font-bold mb-2">
              Recommended Towing Companies in Townsville
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900">
              The two operators we recommend most.
            </h2>
            <p className="text-slate-700 mt-3 text-[15px]">
              We've vetted Townsville's tow companies on response time, insurance, fleet quality
              and customer feedback. These two stand out — for very different reasons.
            </p>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 items-stretch">
          {companies.map((c) => (
            <CompanyCard key={c.slug} company={c} variant={variant} />
          ))}
        </div>
        {showDisclosure && (
          <p className="text-xs text-slate-700 mt-6 max-w-3xl">
            Some recommendations on this site may be sponsored or affiliate placements. We only
            recommend operators we have personally vetted against our published comparison
            criteria.{' '}
            <Link href="/compare" className="underline hover:text-hivis-600">
              See how we compare
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}
