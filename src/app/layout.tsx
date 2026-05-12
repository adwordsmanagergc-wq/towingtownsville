import './globals.css';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter, Manrope } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileCallCta } from '@/components/MobileCallCta';
import { JsonLd } from '@/components/JsonLd';
import { orgSchema, websiteSchema } from '@/lib/schema';
import { site } from '@/config/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s` },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    siteName: site.name,
    locale: 'en_AU',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  width: 'device-width',
  initialScale: 1,
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${manrope.variable}`}>
      <body>
        <JsonLd data={orgSchema()} />
        <JsonLd data={websiteSchema()} />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCallCta />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
