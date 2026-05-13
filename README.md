# Townsville Towing Compare

A production-ready Next.js 14 marketing & comparison site for the Townsville towing market.
The site educates locals on every type of tow service available in Townsville, compares
operators, and recommends two trusted local companies — each linking out to their own
website.

- Recommended company A: **ABC Towing Services** — https://www.abcctowingservices.com/
- Recommended company B: **Kwiktow NQ** — https://kwiktownq.com/

All outbound links to recommended operators use `target="_blank" rel="noopener nofollow sponsored"`.

---

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS, lucide-react icons
- React Hook Form-ready Contact form using a server action + Resend
- App Router metadata API for per-page SEO + JSON-LD via a typed `<JsonLd />` helper
- `app/sitemap.ts` and `app/robots.ts` (Next-native) — `next-sitemap` is also wired in
  for static-export use cases

> Note on MDX. The original spec mentioned MDX/Contentlayer for service, suburb and blog
> content. To keep the build dependency footprint small and the type story end-to-end, all
> content is in editable TypeScript data modules under `src/data/` (with a tiny built-in
> Markdown renderer used for blog post bodies). This means an editor can update copy in
> `src/data/services.ts`, `src/data/suburbs.ts`, `src/data/blog.ts` etc. without touching
> JSX. If you later want to flip individual posts to MDX, swap the body field for a
> dynamic import — the rest of the route stays the same.

---

## Quick start

```bash
pnpm install   # or: npm install
cp .env.example .env.local
pnpm dev       # http://localhost:3000
```

Required env vars (see `.env.example`):

- `NEXT_PUBLIC_SITE_URL` — your live origin, e.g. `https://towingtownsville.com`
- `NEXT_PUBLIC_GA_ID` — GA4 measurement ID, optional
- `RESEND_API_KEY` — for the contact form, optional in dev (form soft-fails)
- `OWNER_EMAIL` — destination address for contact-form emails

---

## How to change the brand name and domain

Edit **`src/config/site.ts`** — every page reads `name`, `shortName`, `url`, `nav`,
contact email, OG image path and theme colour from this single module. There are no
hard-coded brand strings anywhere else (footer, header, JSON-LD, layout all read from
this module).

If you change the public URL, set `NEXT_PUBLIC_SITE_URL` in `.env.local` and on Vercel
so canonicals, sitemap and OG tags update automatically.

---

## How to swap the recommended-companies' logos

Drop SVG (or PNG) files at:

```
public/recommended/abc-towing.svg
public/recommended/kwiktow.svg
```

The `RecommendedCompaniesBlock` component reads `logoSrc` from
`src/data/companies.ts` — change those paths if you use different filenames.

The OG image is at `public/og/default.svg`. For best social-share compatibility, drop a
**1200×630 JPEG or PNG** in its place and update the `defaultOgImage` path in
`src/config/site.ts`.

---

## How to add a new service page

1. Open `src/types/index.ts` and add the new slug to the `ServiceSlug` union.
2. Open `src/data/services.ts` and add a new entry following the existing schema:
   `slug`, `category`, `h1`, `metaTitle`, `metaDescription`, `intro`, `included`,
   `scenarios`, `faqs`, `related`.
3. Optionally add a tile to `src/components/ServiceGrid.tsx` if you want it in the
   home-page service grid.
4. The dynamic route (`/services/[slug]`) and sitemap will pick up the new page
   automatically. Run `pnpm build` to verify.

## How to add a new suburb page

1. Open `src/data/suburbs.ts`.
2. Add a new `Suburb` entry with `slug`, `name`, `metaTitle`, `metaDescription`, `intro`,
   `jobs`, `neighbouring`, `faqs`.
3. Optionally add the slug to neighbouring suburbs' `neighbouring` arrays so the
   internal linking is bidirectional.
4. The dynamic route (`/townsville/[slug]`) and sitemap will pick it up automatically.

## How to add a new blog post

Edit `src/data/blog.ts` — add a new `BlogPost` entry. The `body` field is plain Markdown
(H2/H3, paragraphs, bullet & numbered lists, links, bold/italic). The dynamic route and
sitemap will pick it up automatically.

---

## Recommended operators — single source of truth

`src/data/companies.ts` is the only place the operator URLs, phone numbers, badges,
fleet details and "why we recommend" copy live. Every page that surfaces operators —
home, services hub, every service page, every suburb page, recommended page, compare
page, footer — renders from this module via `<RecommendedCompaniesBlock />`,
`<CompareTable />` or the footer.

To add or remove a recommended company:

1. Update `src/types/index.ts` (`CompanySlug` union).
2. Add/remove the entry in `src/data/companies.ts`.
3. Adjust card copy in `src/components/RecommendedCompaniesBlock.tsx` `cardCopy`.
4. Adjust the comparison rows in `src/components/CompareTable.tsx` if needed.

---

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, import the project. Framework auto-detects as Next.js.
3. In **Project Settings → Environment Variables**, set:
   - `NEXT_PUBLIC_SITE_URL` — your production URL
   - `NEXT_PUBLIC_GA_ID` — GA4 measurement ID (optional)
   - `RESEND_API_KEY` — Resend transactional API key
   - `OWNER_EMAIL` — destination inbox for contact-form enquiries
   - (optional) `NEXT_PUBLIC_GSC_VERIFICATION` — Google Search Console verification token
4. Deploy. Vercel runs `next build` and `postbuild` (`next-sitemap`) — both succeed.

`vercel.json` ships a small set of security headers (no-sniff, referrer policy, locked
permissions). Adjust if you ever need camera/mic/geolocation in the browser.

---

## Owner's launch checklist

After scaffolding, the following are the human-actionable items remaining:

- [ ] **Replace placeholder logos** at `public/recommended/abc-towing.svg` and
  `public/recommended/kwiktow.svg` with the operators' real SVGs (or PNGs).
- [ ] **Replace `public/og/default.svg`** with a 1200×630 JPEG/PNG OG image and update
  `defaultOgImage` in `src/config/site.ts` if you change the file extension.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the live production URL (Vercel env var).
- [ ] Set `RESEND_API_KEY` and `OWNER_EMAIL` (Vercel env vars) so the contact form sends.
- [ ] Set `NEXT_PUBLIC_GA_ID` once a GA4 property exists.
- [ ] Add Google Search Console verification token to `NEXT_PUBLIC_GSC_VERIFICATION`
  (or replace the meta-tag pathway with a DNS verification).
- [ ] Submit `/sitemap.xml` to Google Search Console after the domain is live.
- [ ] Confirm the from-address used by the contact-form server action
  (`noreply@towingtownsville.com`) is verified in Resend.
- [ ] Spot-check the comparison table on `/compare` once you have any updated operator
  details (response time, fleet, etc.) — edit `src/components/CompareTable.tsx` and
  `src/data/companies.ts`.

---

## Acceptance criteria status

- ✅ Production-ready Next.js 14 + TypeScript scaffold
- ✅ All 18 service pages, all 14 suburb pages, recommended page, compare page,
  6 blog posts, about/contact/privacy/terms
- ✅ Per-page metadata via `generateMetadata` with unique titles and descriptions
- ✅ Canonical tags on every page
- ✅ Open Graph + Twitter card on every page (default OG image included)
- ✅ JSON-LD: WebSite, Organization, ItemList (recommended), FAQPage, Service,
  BreadcrumbList, Place, Article — all via the typed `<JsonLd />` helper
- ✅ Internal linking (services link to ≥4 related services + 4 suburbs; suburbs link
  to neighbours and the full services list)
- ✅ Single `RecommendedCompaniesBlock` component reused everywhere — the only place
  outbound URLs are hard-coded is `src/data/companies.ts`
- ✅ All outbound recommended-company links use
  `target="_blank" rel="noopener nofollow sponsored"`
- ✅ Sticky mobile CTA on every page
- ✅ Contact form posts to a server action and sends via Resend; success and error
  states handled with inline status messages
- ✅ ACCC-friendly disclosure on home and `/compare`
- ✅ Australian English spelling throughout
- ⚠️ Lighthouse scores are not measured by `next build`. Run Lighthouse manually
  against the deployed site to verify the perf/SEO/a11y/best-practice targets.

---

## Project structure

```
src/
  app/
    layout.tsx                  Root layout (header, footer, sticky CTA, GA4, Org/WebSite JSON-LD)
    page.tsx                    Home (paste-ready copy, Hero, Recommended block, Service grid, Compare strip, Suburb strip, FAQ, Blog teaser, Final CTA)
    services/
      page.tsx                  Services hub
      [slug]/page.tsx           Service detail (data-driven, JSON-LD, related links)
    townsville/
      page.tsx                  Suburb hub
      [slug]/page.tsx           Suburb detail (data-driven, JSON-LD, neighbours)
    recommended/page.tsx        Long-form why-we-recommend page
    compare/page.tsx            6-criteria framework + side-by-side table
    blog/
      page.tsx                  Blog index
      [slug]/page.tsx           Blog post (Markdown rendered server-side)
    about/contact/privacy/terms Static pages
    sitemap.ts                  Next-native sitemap
    robots.ts                   Next-native robots.txt
    contact/actions.ts          Server action for the contact form (Resend)
  components/                   Header, Footer, Hero, RecommendedCompaniesBlock,
                                ServiceGrid, SuburbStrip, CompareStrip, CompareTable,
                                Faq, JsonLd, Breadcrumbs, ContactForm, MobileCallCta
  config/site.ts                Brand, domain, nav, contact, OG image, GA, GSC
  data/                         companies, services, suburbs, faqs, blog
  lib/                          seo, schema, analytics, md, cn
  types/                        Strong types for all data modules
public/
  recommended/                  Operator logo placeholders
  og/                           Default OG image
```
