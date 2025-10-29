import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Network Sentinel | Real-Time Website Status Checker',
    template: '%s | Network Sentinel',
  },
  description: 'Check the status of any website in real-time with Network Sentinel. Free online tool to monitor if a site is online, offline, or has errors.',
  keywords: ['website checker', 'site status', 'is site down', 'website monitoring', 'uptime', 'network tool', 'network sentinel'],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'pt-BR': '/pt',
      'es-ES': '/es',
    },
  },
  openGraph: {
    title: 'Network Sentinel | Real-Time Website Status Checker',
    description: 'Free online tool to instantly check the status of multiple URLs.',
    url: siteUrl,
    siteName: 'Network Sentinel',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Network Sentinel Banner',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['pt_BR', 'es_ES'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Network Sentinel | Real-Time Website Status Checker',
    description: 'Quickly check if your websites are up. Simple, fast, and free.',
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  applicationName: 'Network Sentinel',
  authors: [{ name: 'Firebase Studio' }],
  creator: 'Firebase Studio',
  publisher: 'Firebase Studio',
  manifest: `${siteUrl}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Network Sentinel',
    description: 'Check the status of any website in real-time with Network Sentinel. Free online tool to monitor if a site is online, offline, or has errors.',
    url: siteUrl,
    applicationCategory: 'Utilities',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    "inLanguage": ["en-US", "pt-BR", "es-ES"]
  };
  
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="alternate" hrefLang="pt-BR" href={`${siteUrl}/pt`} />
        <link rel="alternate" hrefLang="en-US" href={`${siteUrl}/en`} />
        <link rel="alternate" hrefLang="es-ES" href={`${siteUrl}/es`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en`} />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
