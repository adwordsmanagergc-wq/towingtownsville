import { Phone, Truck } from 'lucide-react';
import { companies } from '@/data/companies';
import { cn } from '@/lib/cn';

export const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;

// What each recommended operator is the first call for. Keeps the call
// buttons self-explanatory without forcing the visitor to read the cards.
const callLabels: Record<string, string> = {
  'kwiktow-nq': '24/7 tow truck',
  'abc-towing': 'Heavy & truck recovery',
};

type Props = {
  tone?: 'dark' | 'light';
  className?: string;
  size?: 'md' | 'lg';
};

/** Direct tap-to-call buttons for both recommended operators. */
export function CallButtons({ tone = 'dark', className, size = 'md' }: Props) {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-3', className)}>
      {companies
        .filter((c) => c.phone)
        .map((c, i) => {
          const primary = i === 0;
          return (
            <a
              key={c.slug}
              href={telHref(c.phone!)}
              rel="nofollow"
              className={cn(
                'group inline-flex items-center gap-3 rounded-xl font-semibold transition shadow-sm',
                size === 'lg' ? 'px-5 py-3.5' : 'px-4 py-3',
                primary
                  ? 'bg-hivis text-navy-900 hover:bg-hivis-400'
                  : tone === 'dark'
                    ? 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    : 'bg-navy-800 text-white hover:bg-navy-700',
              )}
            >
              <span
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                  primary ? 'bg-navy-900/10' : 'bg-white/10',
                )}
              >
                {primary ? <Phone className="h-5 w-5" /> : <Truck className="h-5 w-5" />}
              </span>
              <span className="flex flex-col leading-tight text-left">
                <span className="text-[11px] uppercase tracking-wider opacity-80">
                  {callLabels[c.slug] || 'Call'} · {c.name}
                </span>
                <span className={cn(size === 'lg' ? 'text-lg' : 'text-base')}>{c.phone}</span>
              </span>
            </a>
          );
        })}
    </div>
  );
}
