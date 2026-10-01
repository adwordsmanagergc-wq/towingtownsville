import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type Item = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Item[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-slate-200/80 mb-5">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.href} className="inline-flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="text-white font-semibold">
                  {it.name}
                </span>
              ) : (
                <Link href={it.href} className="hover:text-hivis-400 underline underline-offset-2">
                  {it.name}
                </Link>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 text-slate-200/50" aria-hidden />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
