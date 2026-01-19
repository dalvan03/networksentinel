'use server';

import type { UrlStatus } from '@/lib/types';

function isValidUrl(string: string) {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;  
  }
}

function sanitizeUrlInput(input: string): string | null {
  let s = input.trim();
  if (!s) return null;
  // strip trailing commas
  if (s.endsWith(',')) s = s.slice(0, -1).trim();
  // strip surrounding quotes
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1).trim();
  }
  return s;
}

export async function checkUrlStatus(url: string): Promise<UrlStatus> {
    const startTime = Date.now();
    
    const cleaned = sanitizeUrlInput(url);
    if (!cleaned) {
      return {
        url: 'empty line',
        status: 'error',
        error: 'Empty URL provided'
      };
    }

    let fullUrl = cleaned;
    if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
      fullUrl = `https://${fullUrl}`;
    }

    if (!isValidUrl(fullUrl)) {
      return {
        url: cleaned,
        status: 'error',
        error: 'Invalid URL format',
      };
    }

    const UA = 'Mozilla/5.0 (compatible; NetworkSentinel/1.0; +https://networksentinel.anyco.com.br)';
    const commonHeaders = { 'user-agent': UA, accept: '*/*' } as const;

    // Helper to mark any HTTP response as online (even non-2xx), capturing status and text
    const markOnline = (status: number, statusText: string, beganAt: number): UrlStatus => ({
      url: cleaned,
      status: 'online',
      statusCode: status,
      responseTime: Date.now() - beganAt,
      error: status >= 200 && status < 300 ? undefined : statusText || 'HTTP response received',
    });

    // Attempt 1: HEAD (lightweight)
    try {
      const beganAt = Date.now();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      const response = await fetch(fullUrl, {
        method: 'HEAD',
        headers: commonHeaders,
        signal: controller.signal,
        redirect: 'follow',
        cache: 'no-store',
      });
      clearTimeout(timeoutId);
      // Some servers return 405 for HEAD; treat as non-fatal and continue to GET
      if (response.status === 405) {
        throw new Error('HEAD not allowed');
      }
      return markOnline(response.status, response.statusText, beganAt);
    } catch (_) {
      // Fall through to GET
    }

    // Attempt 2: GET
    try {
      const beganAt = Date.now();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      const response = await fetch(fullUrl, {
        method: 'GET',
        headers: commonHeaders,
        signal: controller.signal,
        redirect: 'follow',
        cache: 'no-store',
      });
      clearTimeout(timeoutId);
      return markOnline(response.status, response.statusText, beganAt);
    } catch (error: any) {
      // Attempt 3: Fallback to HTTP if HTTPS failed
      if (fullUrl.startsWith('https://')) {
        try {
          const beganAt = Date.now();
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 10000);
          const httpUrl = 'http://' + fullUrl.replace(/^https?:\/\//, '');
          const response = await fetch(httpUrl, {
            method: 'GET',
            headers: commonHeaders,
            signal: controller.signal,
            redirect: 'follow',
            cache: 'no-store',
          });
          clearTimeout(timeoutId);
          return markOnline(response.status, response.statusText, beganAt);
        } catch (_) {
          // continue to final error
        }
      }
      const responseTime = Date.now() - startTime;
      if (error?.name === 'AbortError') {
        return {
          url: cleaned,
          status: 'error',
          responseTime,
          error: 'Request timed out (10s)',
        };
      }
      return {
        url: cleaned,
        status: 'error',
        responseTime,
        error: error?.cause?.message || error?.message || 'Unknown fetch error',
      };
    }
}

export async function checkUrlStatuses(urls: string[]): Promise<UrlStatus[]> {
  return Promise.all(urls.map((u) => checkUrlStatus(u)));
}
