import { companies } from '@/data/companies';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

// Render "✅ text" cells as an icon + text so the table reads cleanly.
function Cell({ value }: { value: string }) {
  if (value === 'Yes' || value.startsWith('✅')) {
    const rest = value.replace(/^✅\s*(—\s*)?/, '').replace(/^Yes$/, '');
    return (
      <span className="inline-flex items-start gap-1.5">
        <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-green-600 mt-0.5" aria-label="Yes" />
        {rest && <span>{rest}</span>}
      </span>
    );
  }
  return <span>{value}</span>;
}

const rows = [
  { label: 'Insurance & Licensing', cell: () => 'Fully insured & licensed Townsville operator' },
  {
    label: 'Fleet — Tilt Tray',
    cell: () => '✅',
  },
  {
    label: 'Fleet — Heavy Recovery',
    cell: (slug: string) => (slug === 'abc-towing' ? '✅ Specialty' : '✅'),
  },
  {
    label: 'Fleet — 4WD / Off-Road Recovery',
    cell: (slug: string) => (slug === 'abc-towing' ? 'Available' : '✅'),
  },
  {
    label: 'Fleet — Machinery Transport',
    cell: (slug: string) => (slug === 'abc-towing' ? 'Available' : '✅'),
  },
  {
    label: 'Fleet — Boat & Trailer Transport',
    cell: (slug: string) => (slug === 'abc-towing' ? 'On request' : '✅'),
  },
  {
    label: '24/7 Availability',
    cell: (slug: string) => (slug === 'abc-towing' ? '✅ — direct call & email' : '✅ — direct call'),
  },
  {
    label: 'Average Townsville Response Time',
    cell: (slug: string) =>
      slug === 'abc-towing' ? 'Prompt local response' : '~30 minutes (advertised)',
  },
  {
    label: 'Online Booking',
    cell: (slug: string) =>
      slug === 'abc-towing' ? '✅ Book Now flow on site' : 'Phone-first; web enquiry available',
  },
  { label: 'Insurance-Approved', cell: () => 'Yes' },
  {
    label: 'Best fit for',
    cell: (slug: string) =>
      slug === 'abc-towing'
        ? 'Heavy vehicles, large-vehicle recoveries, planned/booked jobs'
        : 'Round-the-clock accident, breakdown and multi-service jobs across NQ',
  },
];

export function CompareTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-100 bg-white shadow-card">
      <table className="w-full min-w-[640px] text-sm text-left">
        <caption className="sr-only">
          Side-by-side comparison of recommended Townsville towing companies
        </caption>
        <thead className="bg-navy-800 text-white">
          <tr>
            <th scope="col" className="px-5 py-4 font-semibold w-[28%]">
              Criteria
            </th>
            {companies.map((c) => (
              <th key={c.slug} scope="col" className="px-5 py-4 font-semibold">
                <span className="inline-flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                    <Image src={c.logoSrc} alt="" width={28} height={28} className="h-6 w-6 object-contain" />
                  </span>
                  {c.name}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
              <th scope="row" className="px-5 py-3.5 font-semibold text-navy-900 align-top">
                {row.label}
              </th>
              {companies.map((c) => (
                <td key={c.slug} className="px-5 py-3.5 text-slate-700 align-top">
                  <Cell value={row.cell(c.slug)} />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row" className="px-5 py-4 font-semibold text-navy-900 border-t border-slate-100">
              Visit site
            </th>
            {companies.map((c) => (
              <td key={c.slug} className="px-5 py-4 border-t border-slate-100">
                <a
                  href={c.websiteUrl}
                  target="_blank"
                  rel="noopener nofollow sponsored"
                  className="inline-flex items-center gap-1 font-semibold text-hivis-600 hover:text-hivis-400"
                >
                  Visit {c.name} <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
