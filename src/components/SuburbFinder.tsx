'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useId, useMemo, useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { cn } from '@/lib/cn';

type Item = { slug: string; name: string; postcode?: string };

type Props = { suburbs: Item[]; tone?: 'dark' | 'light'; className?: string };

/**
 * Type-ahead suburb / postcode search. Renders a plain form so it still
 * works (falls back to the /townsville hub) without JavaScript.
 */
export function SuburbFinder({ suburbs, tone = 'dark', className }: Props) {
  const [q, setQ] = useState('');
  const [active, setActive] = useState(0);
  const router = useRouter();
  const listId = useId();

  const matches = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return suburbs
      .filter((s) => s.name.toLowerCase().includes(term) || s.postcode?.startsWith(term))
      .sort((a, b) => {
        const as = a.name.toLowerCase().startsWith(term) ? 0 : 1;
        const bs = b.name.toLowerCase().startsWith(term) ? 0 : 1;
        return as - bs || a.name.localeCompare(b.name);
      })
      .slice(0, 6);
  }, [q, suburbs]);

  const go = (slug?: string) => router.push(slug ? `/townsville/${slug}` : '/townsville');

  return (
    <form
      action="/townsville"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        go(matches[active]?.slug);
      }}
      className={cn('relative w-full max-w-xl', className)}
    >
      <label htmlFor={`${listId}-input`} className="sr-only">
        Find towing in your Townsville suburb or postcode
      </label>
      <div
        className={cn(
          'flex items-center gap-2 rounded-xl p-1.5 pl-4 ring-1 transition focus-within:ring-2 focus-within:ring-hivis',
          tone === 'dark' ? 'bg-white text-navy-900 ring-white/20' : 'bg-white ring-slate-200',
        )}
      >
        <MapPin className="h-5 w-5 text-hivis-600 shrink-0" aria-hidden />
        <input
          id={`${listId}-input`}
          type="search"
          autoComplete="off"
          placeholder="Your suburb or postcode, e.g. Kirwan or 4814"
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setActive(0);
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setActive((a) => Math.min(a + 1, matches.length - 1));
            } else if (e.key === 'ArrowUp') {
              e.preventDefault();
              setActive((a) => Math.max(a - 1, 0));
            }
          }}
          role="combobox"
          aria-expanded={matches.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          className="min-w-0 flex-1 bg-transparent py-2.5 text-[15px] placeholder:text-slate-500 focus:outline-none"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-1.5 rounded-lg bg-navy-800 px-4 py-2.5 text-sm font-semibold text-white hover:bg-navy-700"
        >
          <Search className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Find</span>
        </button>
      </div>
      {matches.length > 0 && (
        <ul
          id={listId}
          role="listbox"
          className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl bg-white text-navy-900 shadow-card ring-1 ring-slate-200"
        >
          {matches.map((m, i) => (
            <li key={m.slug} role="option" aria-selected={i === active}>
              <Link
                href={`/townsville/${m.slug}`}
                className={cn(
                  'flex items-center justify-between px-4 py-3 text-sm hover:bg-slate-50',
                  i === active && 'bg-slate-50',
                )}
              >
                <span className="font-semibold">Tow truck {m.name}</span>
                {m.postcode && <span className="text-slate-500">QLD {m.postcode}</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {q.trim() && matches.length === 0 && (
        <p className="absolute mt-2 w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-700 shadow-card">
          No exact match — every Townsville suburb is covered.{' '}
          <Link href="/townsville" className="font-semibold text-hivis-600 underline">
            Browse all suburbs
          </Link>
        </p>
      )}
    </form>
  );
}
