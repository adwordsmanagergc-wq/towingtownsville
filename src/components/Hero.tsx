import Image from 'next/image';
import Link from 'next/link';
import { Clock, ShieldCheck, Truck, MapPin } from 'lucide-react';
import { CallButtons } from '@/components/CallButtons';
import { SuburbFinder } from '@/components/SuburbFinder';
import { suburbs } from '@/data/suburbs';

const finderItems = suburbs.map(({ slug, name, postcode }) => ({ slug, name, postcode }));

const trust = [
  { icon: Clock, label: '24/7 callouts', sub: '~30 min metro average' },
  { icon: ShieldCheck, label: 'Insured & licensed', sub: 'Insurance-approved' },
  { icon: Truck, label: 'Tilt tray to heavy', sub: 'Cars, 4WDs, trucks' },
  { icon: MapPin, label: `${suburbs.length}+ areas`, sub: 'Every Townsville suburb' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(242,107,31,0.35),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(56,120,200,0.25),_transparent_50%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="grid gap-10 md:gap-12 md:grid-cols-[1.25fr_1fr] items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-hivis-400 ring-1 ring-white/15 mb-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              Tow trucks available now · Townsville &amp; NQ
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Towing Townsville: <span className="text-hivis-400">a tow truck to you, fast.</span>
            </h1>
            <p className="mt-5 text-lg text-slate-100/90 max-w-2xl leading-relaxed">
              Broken down, crashed or bogged? Call a recommended 24/7 tow truck in Townsville
              direct — accident, breakdown, tilt tray, heavy and 4WD recovery across every suburb
              from the CBD to the Northern Beaches.
            </p>

            <CallButtons size="lg" className="mt-7" />

            <div className="mt-7">
              <p className="text-sm font-semibold text-slate-100/90 mb-2">
                Or find towing in your suburb:
              </p>
              <SuburbFinder suburbs={finderItems} />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[18rem] md:max-w-sm">
            <div
              aria-hidden
              className="absolute inset-0 -m-6 rounded-full bg-[radial-gradient(circle,_rgba(242,107,31,0.35),_transparent_70%)] blur-2xl"
            />
            <div className="relative rounded-[2rem] bg-white p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] rotate-[1.5deg]">
              <Image
                src="/hero/towing-townsville-badge.webp"
                alt="Towing Townsville — reliable tow truck and recovery service badge"
                width={800}
                height={993}
                priority
                sizes="(min-width: 768px) 24rem, 18rem"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {trust.map((t) => (
            <li
              key={t.label}
              className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 ring-1 ring-white/10"
            >
              <t.icon className="h-6 w-6 text-hivis-400 shrink-0" aria-hidden />
              <span className="leading-tight">
                <span className="block font-semibold text-sm">{t.label}</span>
                <span className="block text-xs text-slate-100/70">{t.sub}</span>
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-100/70">
          Not an emergency?{' '}
          <Link href="/services" className="underline hover:text-hivis-400">
            Compare every Townsville tow truck service
          </Link>{' '}
          or{' '}
          <Link href="/#recommended" className="underline hover:text-hivis-400">
            see who we recommend and why
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
