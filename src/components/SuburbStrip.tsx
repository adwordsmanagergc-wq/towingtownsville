import Link from 'next/link';
import { suburbs } from '@/data/suburbs';

export function SuburbStrip() {
  return (
    <section className="py-14 bg-navy-800 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold">Towing across Townsville.</h2>
        <p className="text-slate-100/80 mt-3 max-w-2xl">
          Same recommended operators, every postcode. Find the local guide for your suburb.
        </p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {suburbs.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/townsville/${s.slug}`}
                className="inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-full border border-white/20 hover:bg-white/10"
              >
                {s.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/townsville"
              className="inline-flex items-center text-sm font-semibold px-3 py-1.5 rounded-full bg-hivis text-navy-900 hover:bg-hivis-400"
            >
              All suburbs →
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
