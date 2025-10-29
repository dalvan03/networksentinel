import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Github } from 'lucide-react';

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
      'zh-CN': '/zh',
      'ru-RU': '/ru',
      'ar-AE': '/ar',
      'fr-FR': '/fr',
      'de-DE': '/de',
      'nl-NL': '/nl',
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
    alternateLocale: ['pt_BR', 'es_ES', 'zh_CN', 'ru_RU', 'ar_AE', 'fr_FR', 'de_DE', 'nl_NL'],
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
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
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
    "inLanguage": ["en-US", "pt-BR", "es-ES", "zh-CN", "ru-RU", "ar-AE", "fr-FR", "de-DE", "nl-NL"]
  };

  const lang = params.lang || 'en';
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  return (
    <html lang={lang} dir={dir} className="dark">
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
        <link rel="alternate" hrefLang="zh-CN" href={`${siteUrl}/zh`} />
        <link rel="alternate" hrefLang="ru-RU" href={`${siteUrl}/ru`} />
        <link rel="alternate" hrefLang="ar-AE" href={`${siteUrl}/ar`} />
        <link rel="alternate" hrefLang="fr-FR" href={`${siteUrl}/fr`} />
        <link rel="alternate" hrefLang="de-DE" href={`${siteUrl}/de`} />
        <link rel="alternate" hrefLang="nl-NL" href={`${siteUrl}/nl`} />
        <link rel="alternate" hrefLang="x-default" href={`${siteUrl}/en`} />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
        <Toaster />
        <footer className="w-full border-t border-border/50 py-4 px-4 sm:px-6 md:px-8">
          <div className="container mx-auto flex items-center justify-between">
            <LanguageSwitcher />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with Firebase Studio</span>
              <a href="https://github.com/firebase/studio" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}