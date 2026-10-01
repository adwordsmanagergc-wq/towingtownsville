import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogPosts, getBlogPost } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { CallButtons } from '@/components/CallButtons';
import { suburbs } from '@/data/suburbs';
import { JsonLd } from '@/components/JsonLd';
import {
  articleSchema,
  breadcrumbSchema,
  faqSchema,
  mechanicsItemListSchema,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { renderMarkdown } from '@/lib/md';
import { RecommendedCompaniesBlock } from '@/components/RecommendedCompaniesBlock';

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return allBlogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const p = getBlogPost(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.title} | Towing Townsville`,
    description: p.description,
    path: `/blog/${p.slug}`,
  });
}

export default function BlogPostPage({ params }: Params) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const html = renderMarkdown(post.body);
  const related = allBlogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const suburbCount = suburbs.length;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd data={articleSchema(post)} />
      {post.faqs && <JsonLd data={faqSchema(post.faqs)} />}
      {post.mechanics && <JsonLd data={mechanicsItemListSchema(post.mechanics)} />}

      <PageHero
        crumbs={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
          { name: post.title, href: `/blog/${post.slug}` },
        ]}
        eyebrow={`${new Date(post.date).toLocaleDateString('en-AU', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })} · ${post.readMinutes} min read`}
        title={post.title}
        intro={post.description}
      >
        <p className="mt-6 flex items-center gap-2.5 text-sm text-slate-100/80">
          <Image src="/logo-mark.png" alt="" width={32} height={32} className="h-8 w-8 rounded-full bg-white" />
          By <span className="font-semibold text-white">{post.author}</span>
        </p>
      </PageHero>

      <section className="py-12 md:py-16 bg-white">
        <div className="mx-auto max-w-6xl px-4 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <article
            className="prose-towing prose-article max-w-3xl"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <aside className="h-max space-y-4 lg:sticky lg:top-24">
            <div className="rounded-2xl bg-navy-800 p-5 text-white">
              <p className="font-display text-lg font-bold">Need a tow truck now?</p>
              <p className="mt-1 mb-4 text-sm text-slate-100/80">Both recommended operators answer 24/7.</p>
              <CallButtons className="!flex-col" />
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <p className="font-display font-bold text-navy-900">Find your suburb</p>
              <p className="mt-1 text-sm text-slate-700">
                Local towing advice for all {suburbCount} Townsville suburbs.
              </p>
              <Link
                href="/townsville"
                className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-hivis-600"
              >
                Browse suburbs <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-12 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="font-display text-2xl font-bold text-navy-900">More Townsville towing guides</h2>
            <ul className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-5 hover:shadow-card transition"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-hivis-600">
                      {p.readMinutes} min read
                    </p>
                    <h3 className="mt-1.5 font-display font-bold leading-snug text-navy-900 group-hover:text-hivis-600">
                      {p.title}
                    </h3>
                    <span className="mt-auto pt-3 text-sm font-semibold text-hivis-600">Read →</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <RecommendedCompaniesBlock />
    </>
  );
}
