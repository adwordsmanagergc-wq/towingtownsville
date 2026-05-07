import { companies } from '@/data/companies';
import { ArrowRight } from 'lucide-react';

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
    <div className="overflow-x-auto rounded-xl border border-slate-100 bg-white shadow-card">
      <table className="w-full text-sm text-left">
        <caption className="sr-only">
          Side-by-side comparison of recommended Townsville towing companies
        </caption>
        <thead className="bg-slate-50">
          <tr>
            <th scope="col" className="px-4 py-3 text-navy-900 font-semibold">
              Criteria
            </th>
            {companies.map((c) => (
              <th key={c.slug} scope="col" className="px-4 py-3 text-navy-900 font-semibold">
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
              <th scope="row" className="px-4 py-3 font-medium text-navy-800 align-top">
                {row.label}
              </th>
              {companies.map((c) => (
                <td key={c.slug} className="px-4 py-3 text-slate-700 align-top">
                  {row.cell(c.slug)}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row" className="px-4 py-3 font-medium text-navy-800">
              Visit site
            </th>
            {companies.map((c) => (
              <td key={c.slug} className="px-4 py-3">
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
