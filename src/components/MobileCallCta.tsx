import { Phone, Truck } from 'lucide-react';
import { companies } from '@/data/companies';
import { telHref } from '@/components/CallButtons';

// Sticky bottom bar on mobile: two direct tap-to-call buttons, because a
// stranded driver should be one tap away from a tow truck on every page.
export function MobileCallCta() {
  const [first, second] = companies.filter((c) => c.phone);
  return (
    <div
      role="region"
      aria-label="Call a tow truck"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 grid grid-cols-[1.4fr_1fr] gap-px bg-navy-900 shadow-[0_-4px_16px_rgba(0,0,0,0.25)] pb-[env(safe-area-inset-bottom)]"
    >
      <a
        href={telHref(first.phone!)}
        rel="nofollow"
        className="flex items-center justify-center gap-2 py-3.5 bg-hivis text-navy-900 font-bold"
      >
        <Phone className="h-5 w-5" /> Call 24/7 Tow
      </a>
      {second && (
        <a
          href={telHref(second.phone!)}
          rel="nofollow"
          className="flex items-center justify-center gap-2 py-3.5 bg-navy-800 text-white font-semibold text-sm"
        >
          <Truck className="h-4 w-4" /> Heavy tow
        </a>
      )}
    </div>
  );
}
