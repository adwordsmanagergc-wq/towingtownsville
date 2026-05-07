import Link from 'next/link';
import { site } from '@/config/site';
import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy-800/95 backdrop-blur supports-[backdrop-filter]:bg-navy-800/85 text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:bg-hivis focus:text-navy-900 focus:px-3 focus:py-1 focus:rounded"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-lg tracking-tight">
          {site.shortName}
        </Link>
        <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm font-medium">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-hivis-400">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#recommended"
          className="hidden md:inline-flex items-center gap-2 bg-hivis text-navy-900 font-semibold px-4 py-2 rounded-md hover:bg-hivis-400 transition"
        >
          {site.primaryCtaLabel}
        </Link>
        <Link
          href="/#recommended"
          aria-label="Find a tow truck"
          className="md:hidden inline-flex items-center gap-1 bg-hivis text-navy-900 font-semibold px-3 py-2 rounded-md text-sm"
        >
          <Phone className="h-4 w-4" /> Tow Now
        </Link>
      </div>
    </header>
  );
}
