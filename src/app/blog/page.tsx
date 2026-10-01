import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { allBlogPosts } from '@/data/blog';
import { PageHero } from '@/components/PageHero';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';

export const metadata: Metadata = buildMetadata({
  title: 'Townsville Towing Blog | Guides, Costs and Local Advice',
  description:
    'Honest guides to towing in Townsville — costs, what to do after a crash, tilt tray vs flatbed, 4WD recovery, heavy vehicle breakdowns and more.',
  path: '/blog',
});

const fmt = (d: string) =>
  new Date(d).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' });

export default function BlogIndex() {
  const [featured, ...rest] = allBlogPosts;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]}
        eyebrow="Guides & advice"
        title="Townsville towing — guides & advice."
        intro="Plain-English guides to costs, equipment choices, recovery scenarios and insurance. Written for Townsville drivers."
      />

      <section className="py-12 md:py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid overflow-hidden rounded-3xl bg-navy-800 text-white shadow-card md:grid-cols-[1fr_1.2fr]"
            >
              <div className="relative min-h-[180px] bg-[radial-gradient(circle_at_30%_30%,_rgba(242,107,31,0.55),_transparent_60%),radial-gradient(circle_at_80%_80%,_rgba(56,120,200,0.4),_transparent_55%)]">
                <span className="absolute left-6 top-6 rounded-full bg-hivis px-3 py-1 text-xs font-bold text-navy-900">
                  Latest guide
                </span>
              </div>
              <div className="p-7 md:p-10">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-hivis-400">
                  {fmt(featured.date)} · <Clock className="h-3.5 w-3.5" aria-hidden /> {featured.readMinutes} min read
                </p>
                <h2 className="mt-3 font-display text-2xl md:text-3xl font-extrabold leading-tight group-hover:text-hivis-400 transition">
                  {featured.title}
                </h2>
                <p className="mt-3 text-slate-100/80">{featured.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-hivis-400">
                  Read the guide <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          )}

          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-card hover:-translate-y-0.5 transition"
                >
                  <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-hivis-600">
                    {fmt(p.date)} · <Clock className="h-3.5 w-3.5" aria-hidden /> {p.readMinutes} min
                  </p>
                  <h2 className="mt-2 font-display text-lg font-bold leading-snug text-navy-900 group-hover:text-hivis-600 transition">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-slate-700 line-clamp-3">{p.description}</p>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1 text-sm font-semibold text-hivis-600">
                    Read article <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RecommendedCompaniesBlock className="!bg-white" />
    </>
  );
}
