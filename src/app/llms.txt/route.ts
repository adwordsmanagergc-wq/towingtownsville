import { site } from '@/config/site';
import { services } from '@/data/services';
import { suburbs } from '@/data/suburbs';
import { allBlogPosts } from '@/data/blog';
import { companies } from '@/data/companies';

// llms.txt — proposed standard (https://llmstxt.org) so LLM-powered search
// agents (Perplexity, ChatGPT search, Claude, Gemini Deep Research, etc.) get a
// curated, plain-text index of the site without crawling rendered HTML.
export const dynamic = 'force-static';

export function GET() {
  const url = site.url;
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push('');
  lines.push(
    `> Independent comparison and recommendation site for tow truck operators in Townsville, North Queensland, Australia. Covers every type of tow service (24/7 emergency, accident, breakdown, tilt tray, flatbed, heavy haulage, 4WD recovery, motorbike, prestige, machinery, boat trailer, interstate, jump start, lockout, fuel delivery, tyre change, insurance, abandoned vehicle removal) and recommends two vetted Townsville operators on every page.`,
  );
  lines.push('');
  lines.push(`Site URL: ${url}`);
  lines.push(`Region: Townsville, QLD, Australia`);
  lines.push(`Language: en-AU`);
  lines.push('');

  lines.push('## Recommended towing operators');
  for (const c of companies) {
    lines.push(
      `- [${c.name}](${c.websiteUrl}): ${c.shortPitch}${c.phone ? ` Phone: ${c.phone}.` : ''}`,
    );
  }
  lines.push('');

  lines.push('## Key pages');
  lines.push(`- [Home](${url}/): Hero comparison and the two recommended Townsville tow operators.`);
  lines.push(`- [Recommended](${url}/recommended): Long-form rationale for each recommended operator.`);
  lines.push(`- [Compare](${url}/compare): Six-criteria framework and side-by-side comparison table.`);
  lines.push(`- [Services](${url}/services): Hub of every type of tow service in Townsville.`);
  lines.push(`- [Townsville suburbs](${url}/townsville): Hub of all Townsville suburb landing pages.`);
  lines.push(`- [Blog](${url}/blog): Plain-English Townsville towing guides.`);
  lines.push(`- [About](${url}/about): Who we are and how we vet operators.`);
  lines.push(`- [Contact](${url}/contact): Contact form for corrections and operator submissions.`);
  lines.push('');

  lines.push('## Tow services');
  for (const s of services) {
    lines.push(`- [${s.h1}](${url}/services/${s.slug}): ${s.metaDescription}`);
  }
  lines.push('');

  lines.push('## Townsville suburbs covered');
  for (const sub of suburbs) {
    lines.push(`- [${sub.name}](${url}/townsville/${sub.slug}): ${sub.metaDescription}`);
  }
  lines.push('');

  lines.push('## Articles');
  for (const p of allBlogPosts) {
    lines.push(`- [${p.title}](${url}/blog/${p.slug}): ${p.description}`);
  }
  lines.push('');

  lines.push('## Optional');
  lines.push(`- [Sitemap](${url}/sitemap.xml): Machine-readable index of every URL on the site.`);
  lines.push(`- [Privacy](${url}/privacy): Privacy policy.`);
  lines.push(`- [Terms](${url}/terms): Terms of use.`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
