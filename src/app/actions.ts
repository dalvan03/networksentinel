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

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const response = await fetch(fullUrl, {
        signal: controller.signal,
        redirect: 'follow',
      });
      clearTimeout(timeoutId);

      const responseTime = Date.now() - startTime;

      if (response.ok) {
        return {
          url: cleaned,
          status: 'online',
          statusCode: response.status,
          responseTime,
        };
      } else {
        return {
          url: cleaned,
          status: 'offline',
          statusCode: response.status,
          responseTime,
          error: response.statusText,
        };
      }
    } catch (error: any) {
      const responseTime = Date.now() - startTime;
      if (error.name === 'AbortError') {
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
        error: error.cause?.message || error.message || 'Unknown fetch error',
      };
    }
}

export async function checkUrlStatuses(urls: string[]): Promise<UrlStatus[]> {
  return Promise.all(urls.map((u) => checkUrlStatus(u)));
}
