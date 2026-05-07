import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_rgba(242,107,31,0.5),_transparent_60%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-hivis-400 font-bold mb-4">
          Townsville · 24/7 · Fully Insured Operators
        </p>
        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
          Need a Tow Truck in Townsville? Here's Who to Call.
        </h1>
        <p className="mt-5 text-lg md:text-xl text-slate-100/90 max-w-2xl leading-relaxed">
          We compare every type of tow service in Townsville — from a flat tyre on the Ring Road
          to a multi-vehicle prang in Aitkenvale — and recommend the two local operators we
          trust most for fast, properly insured, damage-free recoveries.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="#recommended"
            className="inline-flex items-center gap-2 bg-hivis text-navy-900 font-semibold px-6 py-3 rounded-md hover:bg-hivis-400 transition"
          >
            See Recommended Companies <ArrowDown className="h-4 w-4" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-md border border-white/20 transition"
          >
            Browse Tow Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <p className="mt-8 text-sm text-slate-200/80">
          24/7 callouts · Fully insured &amp; licensed · Damage-free tilt tray · Insurance-approved · Townsville-based crews
        </p>
      </div>
    </section>
  );
}
