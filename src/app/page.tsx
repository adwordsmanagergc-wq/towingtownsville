import Link from 'next/link';
import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';
import { ServiceGrid } from '@/components/ServiceGrid';
import { CompareStrip } from '@/components/CompareStrip';
import { SuburbStrip } from '@/components/SuburbStrip';
import { Faq } from '@/components/Faq';
import { JsonLd } from '@/components/JsonLd';
import { homeFaqs } from '@/data/faqs';
import { companies } from '@/data/companies';
import { allBlogPosts } from '@/data/blog';
import { faqSchema, recommendedItemListSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Tow Truck Townsville | Compare & Recommended Towing Companies',
  description:
    "Need a tow truck in Townsville? Compare every type of towing service and see the two operators we recommend most for fast, insured, damage-free recoveries.",
  path: '/',
  ogTitle: "Need a Tow Truck in Townsville? Here's Who to Call.",
  ogDescription:
    "Independent comparison of Townsville's towing companies — accident, breakdown, heavy, 4WD recovery and more.",
});

export default function HomePage() {
  const latestPosts = allBlogPosts.slice(0, 3);
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <JsonLd data={recommendedItemListSchema(companies)} />
      <Hero />
      <RecommendedCompaniesBlock id="recommended" />
      <ServiceGrid />
      <CompareStrip />
      <SuburbStrip />
      <Faq faqs={homeFaqs} />

      {/* Blog teaser */}
      <section className="py-14 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900">
            Latest from the Townsville towing blog.
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {latestPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block h-full rounded-xl border border-slate-100 bg-white p-5 hover:shadow-card transition"
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
            Townsville broken down? Start with our recommended operators.
          </h2>
          <p className="text-slate-100/80 mt-3 max-w-2xl">
            Both sites take direct bookings — pick the operator that fits your job and call them
            now.
          </p>
        </div>
        <RecommendedCompaniesBlock variant="compact" showHeading={false} showDisclosure={false} className="!bg-navy-900 !pt-8" />
      </section>
    </>
  );
}
