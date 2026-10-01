import type { Metadata } from 'next';
import Link from 'next/link';
import { Handshake, MapPin, Search } from 'lucide-react';
import { suburbs } from '@/data/suburbs';
import { CallButtons } from '@/components/CallButtons';
import { PageHero } from '@/components/PageHero';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Towing Townsville | Independent Tow Truck Townsville Guide',
  description:
    "Towing Townsville is an independent guide to Townsville's tow truck operators. Here is who we are and how we work.",
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]}
        eyebrow="About us"
        title="An independent guide to towing in Townsville."
        intro="Written by people who have made enough roadside calls to know what good looks like."
      />
      <section className="py-10 bg-slate-50 border-b border-slate-100">
        <ul className="mx-auto max-w-6xl px-4 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Search, title: 'We do the homework', body: 'Every operator is checked against the same published six-point framework.' },
            { icon: Handshake, title: 'Transparent', body: 'Commercial relationships are disclosed on every recommendation block.' },
            { icon: MapPin, title: 'Local', body: `Practical advice for all ${suburbs.length} Townsville suburbs, from the CBD to the Northern Beaches.` },
          ].map((v) => (
            <li key={v.title} className="flex gap-3 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
              <v.icon className="h-6 w-6 shrink-0 text-hivis-600" aria-hidden />
              <div>
                <p className="font-display font-bold text-navy-900">{v.title}</p>
                <p className="mt-1 text-sm text-slate-700">{v.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 prose-towing">
          <p>
            Towing Townsville exists for one practical reason: when something goes
            wrong on the road, most people grab their phone, type "tow truck near me" and ring
            the first number they see. Sometimes that works out. Often it does not. We built
            this site so locals (and visitors) can do five minutes of homework before something
            goes wrong, and ring an operator they have already vetted.
          </p>
          <h2>Independent, but transparent</h2>
          <p>
            We may receive a referral fee or sponsorship from operators featured on this site.
            We will never recommend an operator that fails our published comparison framework
            just because money is on the table. The framework is on the{' '}
            <Link href="/compare">/compare</Link> page, and the disclosure is repeated on the
            home page and on every recommendation block.
          </p>
          <h2>Who we recommend</h2>
          <p>
            Right now we recommend two Townsville operators — see the{' '}
            <Link href="/recommended">recommended page</Link>. The list is short by design: we
            would rather recommend two operators we trust than ten we do not.
          </p>
          <h2>Get in touch</h2>
          <p>
            Spot something out of date? Run a Townsville tow company you think we should
            consider? Send us a note via the{' '}
            <Link href="/contact">contact page</Link>.
          </p>
        </div>
        <div className="mx-auto max-w-3xl px-4">
          <div className="mt-10 rounded-2xl bg-navy-800 p-6 text-white">
            <p className="font-display text-xl font-bold">Need a tow truck right now?</p>
            <p className="mt-1 text-sm text-slate-100/80">Skip the reading — both lines answer 24/7.</p>
            <CallButtons className="mt-5" />
          </div>
        </div>
      </section>
    </>
  );
}
