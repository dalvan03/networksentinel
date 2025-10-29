import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es', 'pt', 'zh', 'ru', 'ar', 'fr', 'de', 'nl', 'hi', 'bn', 'ur', 'id', 'ja', 'tr', 'te', 'vi'];
const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const languages = acceptLanguage.split(',').map(lang => lang.split(';')[0].trim());
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

  // Redirect to the detected locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // For the root path, just redirect to the locale
  if (pathname === '/') {
    return NextResponse.redirect(request.nextUrl);
  }

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
