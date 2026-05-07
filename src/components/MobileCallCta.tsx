import Link from 'next/link';
import { Phone } from 'lucide-react';

export function MobileCallCta() {
  return (
    <div
      role="region"
      aria-label="Find a tow truck"
      className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-hivis text-navy-900 shadow-card"
    >
      <Link
        href="/#recommended"
        className="flex items-center justify-center gap-2 py-3 font-semibold"
      >
        <Phone className="h-5 w-5" /> Find a Tow Truck Now
      </Link>
    </div>
  );
}
