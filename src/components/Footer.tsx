import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/config/site';
import { services } from '@/data/services';
import { suburbs } from '@/data/suburbs';
import { companies } from '@/data/companies';
import { telHref } from '@/components/CallButtons';

const sortedSuburbs = [...suburbs].sort((a, b) => a.name.localeCompare(b.name));

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-100 mt-0">
      <div className="mx-auto max-w-6xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/logo-mark.png" alt="" width={40} height={40} className="h-10 w-10 rounded-full bg-white" />
            <span className="font-display font-extrabold text-xl">
              Towing <span className="text-hivis-400">Townsville</span>
            </span>
          </Link>
          <p className="text-sm text-slate-200/80 mt-4 max-w-xs">
            The independent guide to towing in Townsville — find a 24/7 tow truck for accident,
            breakdown, heavy and 4WD recovery in every suburb.
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            {companies.map((c) =>
              c.phone ? (
                <li key={c.slug}>
                  <a href={telHref(c.phone)} rel="nofollow" className="group inline-flex flex-col">
                    <span className="text-xs text-slate-200/60">{c.name}</span>
                    <span className="font-bold text-white group-hover:text-hivis-400">{c.phone}</span>
                  </a>
                </li>
              ) : null,
            )}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-sm uppercase tracking-wider mb-3 text-hivis-400">
            Towing services
          </h2>
          <ul className="space-y-1.5 text-sm">
            {services.slice(0, 9).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-slate-200/90 hover:text-hivis-400">
                  {s.h1}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="font-semibold hover:text-hivis-400 underline">
                All Townsville towing services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-sm uppercase tracking-wider mb-3 text-hivis-400">
            Recommended
          </h2>
          <ul className="space-y-1.5 text-sm">
            {companies.map((c) => (
              <li key={c.slug}>
                <a
                  href={c.websiteUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="text-slate-200/90 hover:text-hivis-400"
                >
                  {c.name}
                </a>
              </li>
            ))}
            <li>
              <Link href="/recommended" className="text-slate-200/90 hover:text-hivis-400">
                Why we recommend them
              </Link>
            </li>
            <li>
              <Link href="/compare" className="text-slate-200/90 hover:text-hivis-400">
                How we compare
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-sm uppercase tracking-wider mb-3 text-hivis-400">
            Guides &amp; info
          </h2>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/blog" className="text-slate-200/90 hover:text-hivis-400">Townsville towing blog</Link></li>
            <li><Link href="/townsville" className="text-slate-200/90 hover:text-hivis-400">Tow truck Townsville suburbs</Link></li>
            <li><Link href="/about" className="text-slate-200/90 hover:text-hivis-400">About</Link></li>
            <li><Link href="/contact" className="text-slate-200/90 hover:text-hivis-400">Contact</Link></li>
            <li><Link href="/privacy" className="text-slate-200/90 hover:text-hivis-400">Privacy</Link></li>
            <li><Link href="/terms" className="text-slate-200/90 hover:text-hivis-400">Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="font-semibold text-sm uppercase tracking-wider mb-3 text-hivis-400">
            Tow truck Townsville — by suburb
          </h2>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-[13px]">
            {sortedSuburbs.map((s) => (
              <li key={s.slug}>
                <Link href={`/townsville/${s.slug}`} className="text-slate-200/70 hover:text-hivis-400">
                  Towing {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 pb-24 md:pb-6 text-xs text-slate-200/70 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.name} ({site.domain}). Independent guide — not a towing operator.</span>
          <span>Townsville, QLD, Australia</span>
          <span>
            Website powered by{' '}
            <a
              href="https://metatapdigital.com"
              target="_blank"
              rel="noopener"
              className="underline hover:text-hivis-400"
            >
              metatapdigital.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
