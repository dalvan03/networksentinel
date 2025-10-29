import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Network Sentinel | Verificador de Status de Site em Tempo Real',
    template: '%s | Network Sentinel',
  },
  description: 'Verifique o status de qualquer site em tempo real com o Network Sentinel. Ferramenta online grátis para monitorar se um site está online, offline ou com erros.',
  keywords: ['verificador de site', 'status de site', 'site online', 'site offline', 'monitoramento de site', 'uptime', 'ferramenta de rede', 'network sentinel'],
  openGraph: {
    title: 'Network Sentinel | Verificador de Status de Site em Tempo Real',
    description: 'Ferramenta online e gratuita para checar instantaneamente o status de múltiplos URLs.',
    url: siteUrl,
    siteName: 'Network Sentinel',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Banner do Network Sentinel',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Network Sentinel | Verificador de Status de Site em Tempo Real',
    description: 'Cheque rapidamente se seus sites estão no ar. Simples, rápido e grátis.',
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
    description: 'Verifique o status de qualquer site em tempo real com o Network Sentinel. Ferramenta online grátis para monitorar se um site está online, offline ou com erros.',
    url: siteUrl,
    applicationCategory: 'Utilities',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
  };
  
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
