import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Townsville Towing Compare',
  description:
    "Townsville Towing Compare is an independent guide to Townsville's tow truck operators. Here is who we are and how we work.",
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
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold">About this site.</h1>
          <p className="mt-4 text-slate-100/85 text-lg">
            An independent guide to towing in Townsville, written by people who have made
            enough roadside calls to know what good looks like.
          </p>
        </div>
      </section>
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 prose-towing">
          <p>
            Townsville Towing Compare exists for one practical reason: when something goes
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
      </section>
    </>
  );
}
