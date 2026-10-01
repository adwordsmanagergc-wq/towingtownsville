import Link from 'next/link';
import { suburbs, suburbsByRegion } from '@/data/suburbs';

export function SuburbStrip() {
  return (
    <section className="py-16 md:py-20 bg-navy-800 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] text-hivis-400 font-bold mb-2">
            Service area
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Towing Townsville suburbs — all {suburbs.length} covered.
          </h2>
          <p className="text-slate-100/80 mt-3">
            Same recommended 24/7 operators, every postcode from 4810 to 4819. Pick your suburb for
            local towing advice.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {suburbsByRegion.map((r) => (
            <div key={r.key}>
              <h3 className="font-display font-bold text-hivis-400 text-sm uppercase tracking-wider mb-3">
                {r.label}
              </h3>
              <ul className="flex flex-wrap gap-1.5">
                {r.suburbs.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/townsville/${s.slug}`}
                      className="inline-flex items-center text-[13px] font-medium px-2.5 py-1 rounded-full border border-white/15 hover:bg-white/10 hover:border-white/30"
                    >
                      {s.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Link
          href="/townsville"
          className="mt-10 inline-flex items-center text-sm font-semibold px-4 py-2 rounded-lg bg-hivis text-navy-900 hover:bg-hivis-400"
        >
          Tow truck Townsville — all suburbs →
        </Link>
      </div>
    </section>
  );
}
