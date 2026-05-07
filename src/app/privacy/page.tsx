import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/config/site';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `${site.name} privacy policy — how we use cookies and contact form data.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Privacy', path: '/privacy' },
        ])}
      />
      <section className="bg-navy-800 text-white">
        <div className="mx-auto max-w-3xl px-4 py-14 md:py-20">
          <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Privacy', href: '/privacy' }]} />
          <h1 className="font-display text-4xl md:text-5xl font-bold">Privacy policy.</h1>
          <p className="mt-4 text-slate-100/85">Last updated: {new Date().toLocaleDateString('en-AU')}</p>
        </div>
      </section>
      <section className="py-14 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 prose-towing">
          <h2>Who we are</h2>
          <p>
            {site.name} ({site.url}) is an independent comparison and recommendation site for
            towing services in Townsville, Queensland.
          </p>

          <h2>Analytics and cookies (GA4)</h2>
          <p>
            We use Google Analytics 4 to understand how visitors use the site (pages viewed,
            referral source, basic device and country information). GA4 sets first-party
            cookies in your browser. The data is aggregated and we do not use it to identify
            individual visitors. You can opt out via the official Google Analytics opt-out
            browser add-on or by disabling cookies in your browser settings.
          </p>

          <h2>Contact form (Resend)</h2>
          <p>
            When you submit the contact form on this site, we collect your name, email,
            optional phone number and message. The form is processed by a server action and
            forwarded to the site owner via Resend (the transactional email provider we use).
            Resend processes the data on our behalf and the email is stored in the owner's
            inbox.
          </p>
          <p>
            We use this information only to respond to your enquiry. We do not sell, rent or
            share it with third parties for marketing.
          </p>

          <h2>Outbound links to operators</h2>
          <p>
            Links to operator websites on this site open in a new tab. Operator sites have
            their own privacy policies — please review them when you visit.
          </p>

          <h2>Sponsored and affiliate disclosure</h2>
          <p>
            Some recommendations on this site may be sponsored or affiliate placements. We only
            recommend operators we have personally vetted against our published comparison
            criteria.
          </p>

          <h2>Contact</h2>
          <p>
            For privacy questions, contact us via the contact form linked in the footer.
          </p>
        </div>
      </section>
    </>
  );
}
