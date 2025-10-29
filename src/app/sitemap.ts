import { MetadataRoute } from 'next';

const locales = ['en', 'es', 'pt', 'zh', 'ru', 'ar', 'fr', 'de', 'nl', 'hi', 'bn', 'ur', 'id', 'ja', 'tr', 'te', 'vi'];
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 1,
  }));

  return [
    ...routes
  ];
}
