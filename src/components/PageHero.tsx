import type { ReactNode } from 'react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButtons } from '@/components/CallButtons';
import { cn } from '@/lib/cn';

type Props = {
  crumbs: { name: string; href: string }[];
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  showCall?: boolean;
  narrow?: boolean;
  children?: ReactNode;
};

/** Shared dark page header used by every inner page for a consistent look. */
export function PageHero({ crumbs, eyebrow, title, intro, showCall, narrow, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-800 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(242,107,31,0.3),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(56,120,200,0.18),_transparent_50%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      <div className={cn('relative mx-auto px-4 py-12 md:py-16', narrow ? 'max-w-3xl' : 'max-w-6xl')}>
        <Breadcrumbs items={crumbs} />
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.22em] text-hivis-400 font-bold mb-3">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-tight tracking-tight max-w-4xl">
          {title}
        </h1>
        {intro && <div className="mt-4 text-lg text-slate-100/85 max-w-2xl leading-relaxed">{intro}</div>}
        {showCall && <CallButtons className="mt-7" />}
        {children}
      </div>
    </section>
  );
}
