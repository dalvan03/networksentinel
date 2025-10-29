import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Github } from 'lucide-react';
import { getTranslations } from '@/lib/translations';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang || 'en';
  const t = getTranslations(lang);

  const languages: { [key: string]: string } = {
    'en-US': '/en', 'en-GB': '/en', 'en-CA': '/en', 'en-AU': '/en',
    'pt-BR': '/pt', 'pt-PT': '/pt', 'pt-AO': '/pt', 'pt-MZ': '/pt',
    'es-ES': '/es', 'es-MX': '/es', 'es-AR': '/es', 'es-CO': '/es', 'es-CL': '/es',
    'zh-CN': '/zh', 'zh-TW': '/zh', 'zh-HK': '/zh',
    'ru-RU': '/ru', 'ru-UA': '/ru',
    'ar-SA': '/ar', 'ar-EG': '/ar', 'ar-AE': '/ar',
    'fr-FR': '/fr', 'fr-CA': '/fr', 'fr-BE': '/fr', 'fr-CH': '/fr',
    'de-DE': '/de', 'de-AT': '/de', 'de-CH': '/de',
    'nl-NL': '/nl', 'nl-BE': '/nl',
    'hi-IN': '/hi',
    'bn-BD': '/bn', 'bn-IN': '/bn',
    'ur-PK': '/ur', 'ur-IN': '/ur',
    'id-ID': '/id',
    'ja-JP': '/ja',
    'tr-TR': '/tr',
    'te-IN': '/te',
    'vi-VN': '/vi',
  };

  const currentLocale = Object.keys(languages).find(key => key.startsWith(lang)) || 'en-US';

  const alternateLocales = Object.keys(languages).filter(key => key !== currentLocale);
  const alternateLocaleMap: { [key: string]: string } = {};
  alternateLocales.forEach(loc => {
    alternateLocaleMap[loc] = `${siteUrl}${languages[loc]}`;
  });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t.meta.title,
      template: `%s | ${t.appName}`,
    },
    description: t.meta.description,
    keywords: t.meta.keywords,
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(
        Object.entries(languages).map(([locale, path]) => [locale, `${siteUrl}${path}`])
      ),
    },
    openGraph: {
      title: t.meta.title,
      description: t.og.description,
      url: `${siteUrl}/${lang}`,
      siteName: t.appName,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: t.og.imageAlt,
        },
      ],
      locale: t.og.locale,
      alternateLocale: alternateLocales,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.twitter.description,
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
    applicationName: t.appName,
    authors: [{ name: 'Firebase Studio' }],
    creator: 'Firebase Studio',
    publisher: 'Firebase Studio',
    manifest: `${siteUrl}/site.webmanifest`,
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  const lang = params.lang || 'en';
  const t = getTranslations(lang);

  const allLangs = ["en", "pt", "es", "zh", "ru", "ar", "fr", "de", "nl", "hi", "bn", "ur", "id", "ja", "tr", "te", "vi"];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t.appName,
    description: t.meta.description,
    url: siteUrl,
    applicationCategory: 'Utilities',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    "inLanguage": allLangs,
  };

  const dir = ['ar', 'ur'].includes(lang) ? 'rtl' : 'ltr';
  
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
        {allLangs.map(l => <link key={l} rel="alternate" hrefLang={l} href={`${siteUrl}/${l}`} />)}
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
