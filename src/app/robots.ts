import type { MetadataRoute } from 'next';
import { site } from '@/config/site';

// We explicitly allow well-known AI search and training crawlers in addition
// to the default `*`. Listing them by name makes the intent unambiguous and
// avoids edge cases where a bot honours only its own UA rule.
const aiBots = [
  'GPTBot', // OpenAI search/crawl
  'OAI-SearchBot', // ChatGPT search
  'ChatGPT-User',
  'ClaudeBot', // Anthropic
  'Claude-Web',
  'anthropic-ai',
  'Google-Extended', // Gemini training
  'GoogleOther',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot-Extended', // Apple Intelligence
  'Bingbot',
  'CCBot', // Common Crawl (powers many open LLMs)
  'Amazonbot',
  'meta-externalagent', // Meta AI
  'Bytespider', // ByteDance / Doubao
  'YouBot',
  'Diffbot',
  'cohere-ai',
  'Mistralai-User',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((ua) => ({ userAgent: ua, allow: '/' })),
    ],
    sitemap: [`${site.url}/sitemap.xml`, `${site.url}/llms.txt`],
    host: site.url,
  };
}
