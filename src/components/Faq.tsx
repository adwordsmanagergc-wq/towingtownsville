import type { Faq as FaqType } from '@/types';

type Props = {
  heading?: string;
  faqs: FaqType[];
  className?: string;
};

export function Faq({ heading = 'Townsville towing — common questions.', faqs, className }: Props) {
  return (
    <section className={`py-14 md:py-20 bg-white ${className || ''}`}>
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-8">
          {heading}
        </h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-slate-100 bg-slate-50 open:bg-white open:shadow-card"
            >
              <summary className="cursor-pointer list-none p-4 font-semibold text-navy-900 flex items-start justify-between gap-4">
                <span>{f.q}</span>
                <span
                  aria-hidden
                  className="text-hivis-600 transition group-open:rotate-45 text-2xl leading-none mt-[-2px]"
                >
                  +
                </span>
              </summary>
              <div className="px-4 pb-4 text-[15px] text-slate-700 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
