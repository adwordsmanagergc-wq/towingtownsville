import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogPosts, getBlogPost } from '@/data/blog';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
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
    title: `${p.title} | Townsville Towing Compare`,
    description: p.description,
    path: `/blog/${p.slug}`,
  });
}

export default function BlogPostPage({ params }: Params) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const html = renderMarkdown(post.body);

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

      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Blog', href: '/blog' },
              { name: post.title, href: `/blog/${post.slug}` },
            ]}
          />
          <p className="text-xs uppercase tracking-wider text-hivis-400 font-semibold">
            {new Date(post.date).toLocaleDateString('en-AU', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}{' '}
            · {post.readMinutes} min read
          </p>
          <h1 className="font-display text-3xl md:text-5xl font-bold mt-2 leading-tight">
            {post.title}
          </h1>
          <p className="mt-4 text-slate-100/85 text-lg">{post.description}</p>
        </div>
      </section>

      <article className="py-14 md:py-20 bg-white">
        <div
          className="mx-auto max-w-3xl px-4 prose-towing"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <RecommendedCompaniesBlock />
    </>
  );
}
