import Link from 'next/link';
import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';
import { ServiceGrid } from '@/components/ServiceGrid';
import { CompareStrip } from '@/components/CompareStrip';
import { CallButtons } from '@/components/CallButtons';
import { SuburbStrip } from '@/components/SuburbStrip';
import { Faq } from '@/components/Faq';
import { HowItWorks } from '@/components/HowItWorks';
import { HomeGuide } from '@/components/HomeGuide';
import { JsonLd } from '@/components/JsonLd';
import { homeFaqs } from '@/data/faqs';
import { companies } from '@/data/companies';
import { allBlogPosts } from '@/data/blog';
import { faqSchema, recommendedItemListSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Towing Townsville | 24/7 Tow Truck Townsville — Call Now',
  description:
    'Towing Townsville: call a recommended 24/7 tow truck in Townsville for accident, breakdown, tilt tray, heavy & 4WD recovery in every suburb. ~30 min metro.',
  path: '/',
  ogTitle: 'Towing Townsville — 24/7 Tow Truck Townsville',
  ogDescription:
    'Need a tow truck in Townsville? Call a recommended 24/7 operator direct — accident, breakdown, tilt tray, heavy and 4WD recovery across every suburb.',
  extraKeywords: [
    'towing Townsville',
    'tow truck Townsville',
    'Townsville towing',
    'cheap tow truck Townsville',
    'tow truck Thuringowa',
    'tow truck Northern Beaches Townsville',
  ],
});

export default function HomePage() {
  const latestPosts = allBlogPosts.slice(0, 3);
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <JsonLd data={recommendedItemListSchema(companies)} />
      <Hero />
      <HowItWorks />
      <RecommendedCompaniesBlock id="recommended" className="scroll-mt-16" />
      <ServiceGrid />
      <SuburbStrip />
      <HomeGuide />
      <CompareStrip />
      <Faq heading="Towing Townsville — common questions" faqs={homeFaqs} className="!bg-slate-50" />

      {/* Blog teaser */}
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900">
            Latest from the Townsville towing blog.
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {latestPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block h-full rounded-xl border border-slate-100 bg-slate-50 p-5 hover:bg-white hover:shadow-card transition"
                >
                  <p className="text-xs uppercase tracking-wider text-hivis-600 font-semibold">
                    {new Date(p.date).toLocaleDateString('en-AU', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </p>
                  <h3 className="font-display font-bold text-navy-900 text-lg mt-1 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-700 mt-2">{p.description}</p>
                  <span className="text-sm font-semibold text-hivis-600 mt-3 inline-block">
                    Read more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link href="/blog" className="text-sm font-semibold text-navy-800 underline">
              See all guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 md:py-20 bg-navy-900 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Broken down in Townsville? Call a tow truck now.
          </h2>
          <p className="text-slate-100/80 mt-3 max-w-2xl">
            Both recommended operators answer 24/7 and take direct bookings — tap to call the one
            that fits your job.
          </p>
          <CallButtons size="lg" className="mt-7" />
        </div>
      </section>
    </>
  );
}
