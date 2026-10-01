import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { AlertTriangle, Mail } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { CallButtons } from '@/components/CallButtons';
import { site } from '@/config/site';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Towing Townsville',
  description:
    'Send us a note about Towing Townsville — corrections, suggestions or operator submissions.',
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
      <PageHero
        crumbs={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]}
        eyebrow="Contact"
        title="Get in touch."
        intro="Corrections, suggestions or operator submissions — we read everything."
      />
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 grid gap-8 lg:grid-cols-[1fr_22rem]">
          <div className="rounded-3xl bg-white p-6 md:p-10 shadow-card ring-1 ring-slate-100">
            <h2 className="font-display text-2xl font-bold text-navy-900">Send us a message</h2>
            <p className="mt-1 mb-8 text-sm text-slate-600">
              For general enquiries, corrections and operator submissions. We usually reply within
              two business days.
            </p>
            <ContactForm />
          </div>
          <aside className="h-max space-y-4">
            <div className="rounded-3xl bg-navy-800 p-6 text-white">
              <p className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-xs font-bold text-red-200">
                <AlertTriangle className="h-3.5 w-3.5" aria-hidden /> Broken down right now?
              </p>
              <p className="mt-3 font-display text-xl font-bold">Don&apos;t use the form — call a tow truck.</p>
              <p className="mt-1 mb-5 text-sm text-slate-100/80">Both recommended operators answer 24/7.</p>
              <CallButtons className="!flex-col" />
            </div>
            <div className="rounded-3xl bg-white p-6 ring-1 ring-slate-100">
              <p className="font-display font-bold text-navy-900">Email</p>
              <a href={`mailto:${site.contactEmail}`} className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-hivis-600 hover:underline">
                <Mail className="h-4 w-4" aria-hidden /> {site.contactEmail}
              </a>
              <p className="mt-4 text-xs text-slate-600">
                We&apos;re an independent guide, not a towing operator — we can&apos;t dispatch trucks.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
