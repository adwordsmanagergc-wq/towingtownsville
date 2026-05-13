import Link from 'next/link';
import { ShieldCheck, Wrench, Clock, Star } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Insurance & Licensing',
    body: 'Properly insured, properly licensed — and willing to show the paperwork.',
  },
  {
    icon: Wrench,
    title: 'Fleet & Equipment',
    body:
      'Tilt trays for damage-free moves, heavy rigs for the bigger jobs, recovery gear that suits North Queensland conditions.',
  },
  {
    icon: Clock,
    title: 'Response Time',
    body:
      'A tow company is only useful if it actually turns up. We track average response times across Townsville suburbs.',
  },
  {
    icon: Star,
    title: 'Reviews & Reputation',
    body:
      'Volume, consistency and how they handle the difficult jobs — not just the easy ones.',
  },
];

export function CompareStrip() {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900">
            How we compare towing companies in Townsville.
          </h2>
          <p className="text-slate-700 mt-3 text-[15px]">
            Anyone with a tow truck and a phone number can call themselves a towing company. We
            don't recommend an operator until they've passed all six checks below.
          </p>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <li
              key={it.title}
              className="rounded-xl border border-slate-100 bg-white p-5 shadow-card"
            >
              <it.icon className="h-6 w-6 text-hivis-600" aria-hidden />
              <h3 className="font-display font-bold text-navy-900 mt-3">{it.title}</h3>
              <p className="text-sm text-slate-700 mt-1">{it.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href="/compare" className="text-sm font-semibold text-navy-800 underline">
            How we compare Townsville towing companies →
          </Link>
        </div>
      </div>
    </section>
  );
}
