import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ContactForm } from '@/components/ContactForm';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Townsville Towing Compare',
  description:
    'Send us a note about Townsville Towing Compare — corrections, suggestions or operator submissions.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold">Contact us.</h1>
          <p className="mt-4 text-slate-100/85 text-lg">
            Corrections, suggestions or operator submissions — we read everything.
          </p>
        </div>
      </section>
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-slate-700 mb-8">
            Need a tow truck right now? Use the{' '}
            <a href="/#recommended" className="underline hover:text-hivis-600">
              recommended operators
            </a>{' '}
            on the home page — they answer 24/7. This form is for general enquiries.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
