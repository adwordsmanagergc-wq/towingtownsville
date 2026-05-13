# SEO & Structured Data Coverage Report

Generated against the production build of Townsville Towing Compare.
This report reflects the current state of the `claude/townsville-towing-site-yPIag`
branch and should be re-run after any structural change.

## Crawler & AI discovery

| File | Status | Notes |
| --- | --- | --- |
| `/sitemap.xml` | ✅ 53 URLs | Auto-generated from `src/app/sitemap.ts`. Includes home, services hub, 18 service pages, suburbs hub, 14 suburb pages, recommended, compare, blog index, 7 blog posts, about, contact, privacy, terms. |
| `/robots.txt` | ✅ 21 user-agent rules | `*` allowed + 20 explicit AI/search bots (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, anthropic-ai, Google-Extended, GoogleOther, PerplexityBot, Perplexity-User, Applebot-Extended, Bingbot, CCBot, Amazonbot, meta-externalagent, Bytespider, YouBot, Diffbot, cohere-ai, Mistralai-User). References both `/sitemap.xml` and `/llms.txt`. |
| `/llms.txt` | ✅ Generated | Plain-text index per llmstxt.org spec. Auto-generated from data, includes recommended operators, key pages, all services, all suburbs, all blog posts, sitemap. |
| Favicon + Apple touch | ✅ `src/app/icon.png` + `src/app/apple-icon.png` | Auto-routed by Next.js to `/icon.png` and `/apple-icon.png`. |

## Structured data (JSON-LD)

Every route emits **Organization** + **WebSite** schema via the root layout.
Per-route additions:

| Route type | JSON-LD blocks |
| --- | --- |
| Home (`/`) | Organization, WebSite, ItemList (recommended operators), FAQPage (8 home FAQs) |
| `/services` (hub) | Organization, WebSite, BreadcrumbList |
| `/services/[slug]` (18 pages) | Organization, WebSite, Service, BreadcrumbList, FAQPage |
| `/townsville` (hub) | Organization, WebSite, BreadcrumbList |
| `/townsville/[slug]` (14 pages) | Organization, WebSite, Place, BreadcrumbList, FAQPage |
| `/recommended` | Organization, WebSite, ItemList (recommended operators), BreadcrumbList |
| `/compare` | Organization, WebSite, ItemList (recommended operators), BreadcrumbList |
| `/blog` | Organization, WebSite, BreadcrumbList |
| `/blog/[slug]` (7 posts) | Organization, WebSite, Article, BreadcrumbList |
| `/blog/top-10-mechanics-townsville-towing-service` | + FAQPage (4 Qs), + ItemList (10 ranked `AutoRepair` items) |
| `/about` `/contact` `/privacy` `/terms` | Organization, WebSite, BreadcrumbList |

**Organization logo** points at `/hero/towing-townsville.png` (the badge) — feeds Google's Knowledge Panel and AI Overviews.

## Per-page metadata coverage

Every route uses `generateMetadata` via `src/lib/seo.ts → buildMetadata()`, which emits:

- **Unique `<title>`** per route
- **Unique `<meta name="description">`** per route (≤155 chars on home + most pages)
- **Canonical URL** (`<link rel="canonical">`)
- **`<meta name="robots">`** — `index, follow`
- **`<meta name="keywords">`** — 12 site-wide base keywords (tow truck Townsville, towing Townsville, etc.) merged with optional per-page extras. Google ignores keywords; Bing and several AI search crawlers still consume them.
- **Open Graph** (`og:type`, `og:url`, `og:site_name`, `og:title`, `og:description`, `og:image` 1200×630, `og:locale=en_AU`)
- **Twitter card** (`summary_large_image`)
- **Google Site Verification meta** when `NEXT_PUBLIC_GSC_VERIFICATION` env var is set

## Target keywords — placement audit

Primary: **tow truck Townsville**, **towing Townsville**.

| Surface | Placement | Anchor / content |
| --- | --- | --- |
| Home `<title>` | ✅ | "Tow Truck Townsville \| Compare & Recommended Towing Companies" |
| Home `<meta description>` | ✅ | "Towing Townsville guide — compare every Tow Truck Townsville service…" — both phrases present, 144 chars. |
| Home H1 | ✅ | "Need a Tow Truck in Townsville? Here's Who to Call." |
| Hero subhead | ✅ | "every type of tow service in Townsville…" |
| Hero CTAs | ✅ | "Browse Townsville Tow Truck Services" |
| Service grid CTA | ✅ | "See all Townsville tow truck services →" |
| Compare strip CTA | ✅ | "How we compare Townsville towing companies →" |
| Suburb strip H2 | ✅ | "Towing across Townsville." |
| Footer hub link | ✅ | "All Townsville towing services" |
| Footer suburbs link | ✅ | "Tow truck Townsville — all suburbs" |
| Service page → suburb list | ✅ | "Tow truck Townsville — suburbs we cover" / "Tow truck [Suburb]" |
| Service page → all-suburbs link | ✅ | "All tow truck Townsville suburbs →" |
| Service page → related list | ✅ | "Related Townsville towing services" |
| Suburb page → services list | ✅ | "Tow truck Townsville services in [Suburb]" |
| Suburb page → neighbours | ✅ | "Nearby towing Townsville suburbs" / "Tow truck [Neighbour]" |
| Suburb page → all-suburbs link | ✅ | "All towing Townsville suburbs →" |
| All service page meta titles | ✅ | Pattern: "[Service] Townsville \| …" |
| All suburb page meta titles | ✅ | Pattern: "[Suburb] Tow Truck \| 24/7 Towing — Townsville Towing Compare" |

## Internal-link integrity

- Every static `href` referenced in the codebase resolves to a real generated route.
- All `related` slugs in `src/data/services.ts` are valid service slugs (17 unique, all matched against the 18 service slugs).
- All `neighbouring` slugs in `src/data/suburbs.ts` are valid suburb slugs (14 unique).
- Zero internal 404s.

## Acceptance criteria from the original brief

| Item | Status |
| --- | --- |
| `pnpm build` zero errors | ✅ 58 static pages |
| `/sitemap.xml` lists every page | ✅ 53 URLs |
| `/robots.txt` returns 200, references sitemap | ✅ |
| Recommended companies block reused on home, services hub, every service page, every suburb page, recommended page, compare page | ✅ `<RecommendedCompaniesBlock />` |
| All outbound recommended-company links use `target="_blank" rel="noopener nofollow sponsored"` | ✅ Verified in component |
| No Lorem Ipsum / placeholder copy | ✅ |
| Mobile sticky-call CTA on every page | ✅ `<MobileCallCta />` in root layout |
| Contact form via Resend server action | ✅ Soft-fails in dev when env vars missing |
| Lighthouse mobile ≥95 perf / 100 a11y / 100 best-prac / 100 SEO | ⚠️ Not measured by `next build`. Run against the deployed URL. |

## How to refresh this report

```bash
CI=1 pnpm build
# Then re-run the URL/href audit:
grep -rhoE 'href="(/[^"]*)"' src/ | sort -u
grep -oE '<loc>[^<]+</loc>' public/sitemap-0.xml | wc -l
grep -c "^User-Agent:" .next/server/app/robots.txt.body
```
