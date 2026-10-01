'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { site } from '@/config/site';
import { companies } from '@/data/companies';
import { cn } from '@/lib/cn';

const primary = companies.find((c) => c.phone)!;
const tel = `tel:${primary.phone!.replace(/\s+/g, '')}`;

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 bg-navy-800/95 backdrop-blur supports-[backdrop-filter]:bg-navy-800/85 text-white border-b border-white/5">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:bg-hivis focus:text-navy-900 focus:px-3 focus:py-1 focus:rounded"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label={`${site.name} home`}>
          <Image src="/logo-mark.png" alt="" width={36} height={36} className="h-9 w-9 rounded-full bg-white ring-2 ring-white/20" priority />
          <span className="font-display font-extrabold text-lg tracking-tight leading-none">
            Towing <span className="text-hivis-400">Townsville</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden lg:flex gap-1 text-sm font-medium">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'px-3 py-2 rounded-md transition hover:bg-white/10',
                isActive(item.href) && 'bg-white/10 text-hivis-400',
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={tel}
            rel="nofollow"
            className="inline-flex items-center gap-2 bg-hivis text-navy-900 font-bold px-3 sm:px-4 py-2 rounded-lg hover:bg-hivis-400 transition text-sm"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">24/7: {primary.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg hover:bg-white/10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn('lg:hidden border-t border-white/10 bg-navy-800', open ? 'block' : 'hidden')}
      >
        <ul className="mx-auto max-w-6xl px-4 py-3 grid grid-cols-2 gap-1">
          {site.nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'block px-3 py-3 rounded-lg font-medium hover:bg-white/10',
                  isActive(item.href) && 'bg-white/10 text-hivis-400',
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
