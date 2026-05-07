import Link from 'next/link';
import { site } from '@/config/site';
import { services } from '@/data/services';
import { suburbs } from '@/data/suburbs';
import { companies } from '@/data/companies';

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-100 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display font-bold text-lg mb-3">{site.name}</h3>
          <p className="text-sm text-slate-200/80">
            Independent comparison of Townsville's towing companies — accident, breakdown, heavy,
            4WD recovery and more.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Services</h4>
          <ul className="space-y-1 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-hivis-400">
                  {s.h1.replace(' in Townsville', '').replace(' from Townsville', '')}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="hover:text-hivis-400 underline">
                See all services
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Suburbs</h4>
          <ul className="space-y-1 text-sm">
            {suburbs.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link href={`/townsville/${s.slug}`} className="hover:text-hivis-400">
                  {s.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/townsville" className="hover:text-hivis-400 underline">
                All Townsville suburbs
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-3">Recommended</h4>
          <ul className="space-y-1 text-sm">
            {companies.map((c) => (
              <li key={c.slug}>
                <a
                  href={c.websiteUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="hover:text-hivis-400"
                >
                  {c.name}
                </a>
              </li>
            ))}
            <li>
              <Link href="/recommended" className="hover:text-hivis-400 underline">
                See why
              </Link>
            </li>
          </ul>
          <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 mt-6">About</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="hover:text-hivis-400">About</Link></li>
            <li><Link href="/compare" className="hover:text-hivis-400">How we compare</Link></li>
            <li><Link href="/contact" className="hover:text-hivis-400">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-hivis-400">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-hivis-400">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-200/70 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span>Townsville, QLD, Australia · Australian English</span>
        </div>
      </div>
    </footer>
  );
}
