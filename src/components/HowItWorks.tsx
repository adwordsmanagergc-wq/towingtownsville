import { PhoneCall, MapPin, Truck } from 'lucide-react';

const steps = [
  {
    icon: PhoneCall,
    title: 'Call a recommended operator',
    body: 'Tap a number — both lines answer 24/7. No forms, no middleman, no call centre.',
  },
  {
    icon: MapPin,
    title: 'Give your location & vehicle',
    body: 'Suburb, nearest cross street, make and model, and whether it rolls and steers. Ask for the quote up front.',
  },
  {
    icon: Truck,
    title: 'Tow truck on the way',
    body: 'Around 30 minutes for most of metro Townsville. Towed to your mechanic, home or the insurer’s yard.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-14 md:py-16 bg-white border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-navy-900 text-center">
          Getting a tow truck in Townsville takes three steps.
        </h2>
        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl bg-slate-50 p-6">
              <span className="absolute -top-3 left-6 rounded-full bg-navy-800 px-2.5 py-0.5 text-xs font-bold text-white">
                Step {i + 1}
              </span>
              <s.icon className="h-8 w-8 text-hivis-600" aria-hidden />
              <h3 className="font-display font-bold text-navy-900 text-lg mt-3">{s.title}</h3>
              <p className="text-sm text-slate-700 mt-1.5 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
