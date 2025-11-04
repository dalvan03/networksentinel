import { NextRequest, NextResponse } from 'next/server';

const locales: readonly string[] = ['en', 'es', 'pt', 'zh', 'ru', 'ar', 'fr', 'de', 'nl', 'hi', 'bn', 'ur', 'id', 'ja', 'tr', 'te', 'vi'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const languages: string[] = acceptLanguage
      .split(',')
      .map((lang: string) => lang.split(';')[0].trim());
    for (const lang of languages) {
      const locale = lang.split('-')[0];
      if (locales.includes(locale)) {
        return locale;
      }
    }
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname is for a static file or API route
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // For the root path, always redirect to the default locale to avoid
  // blank pages when a detected locale has no corresponding route.
  if (pathname === '/') {
    request.nextUrl.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // For non-root paths, redirect/rewrite to the detected locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;

  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|.*\\..*).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
