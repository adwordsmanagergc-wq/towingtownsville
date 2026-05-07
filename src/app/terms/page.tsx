import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use',
  description: `${site.name} terms of use, disclaimers and disclosure.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Terms', path: '/terms' },
        ])}
      />
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Terms', href: '/terms' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold">Terms of use.</h1>
          <p className="mt-4 text-slate-100/85">Last updated: {new Date().toLocaleDateString('en-AU')}</p>
        </div>
      </section>
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 prose-towing">
          <h2>Information only</h2>
          <p>
            Content on this site is general information about towing services in Townsville,
            Queensland. It is not legal, insurance or roadside safety advice. Always follow the
            instructions of attending police or emergency services and contact your insurer
            directly for cover-specific questions.
          </p>

          <h2>Recommendations and disclosure</h2>
          <p>
            Operator recommendations on this site reflect our independent comparison framework
            (see <a href="/compare">/compare</a>). Some placements may be sponsored or
            affiliate. We will always disclose this. We do not accept paid placements from
            operators that fail our comparison criteria.
          </p>

          <h2>Outbound links</h2>
          <p>
            Links to operator websites are provided for convenience. We have no control over
            third-party content, pricing or availability. Confirm details directly with the
            operator before authorising any tow.
          </p>

          <h2>Liability</h2>
          <p>
            To the maximum extent permitted by Australian Consumer Law, {site.name} accepts no
            liability for loss arising from reliance on information on this site.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms from time to time. The current version is always
            available at <a href="/terms">/terms</a>.
          </p>
        </div>
      </section>
    </>
  );
}
