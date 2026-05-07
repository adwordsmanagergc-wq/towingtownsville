import type { Metadata } from 'next';
import Link from 'next/link';
import { allBlogPosts } from '@/data/blog';
import { Breadcrumbs } from '@/components/Breadcrumbs';
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

export default function BlogIndex() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ])}
      />
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold">
            Townsville towing — guides &amp; advice.
          </h1>
          <p className="mt-4 text-slate-100/85 max-w-2xl">
            Plain-English guides to costs, equipment choices, recovery scenarios and
            insurance. Written for Townsville drivers.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="grid gap-5 md:grid-cols-2">
            {allBlogPosts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="block h-full rounded-xl border border-slate-100 bg-slate-50 p-6 hover:bg-white hover:shadow-card transition"
                >
                  <p className="text-xs uppercase tracking-wider text-hivis-600 font-semibold">
                    {new Date(p.date).toLocaleDateString('en-AU', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}{' '}
                    · {p.readMinutes} min read
                  </p>
                  <h2 className="font-display font-bold text-navy-900 text-xl mt-2 leading-tight">
                    {p.title}
                  </h2>
                  <p className="text-sm text-slate-700 mt-2">{p.description}</p>
                  <span className="inline-block text-sm font-semibold text-hivis-600 mt-3">
                    Read article →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RecommendedCompaniesBlock />
    </>
  );
}
