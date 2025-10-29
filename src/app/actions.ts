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

export async function checkUrlStatuses(urls: string[]): Promise<UrlStatus[]> {
  const promises = urls.map(async (url): Promise<UrlStatus> => {
    const startTime = Date.now();
    
    if (!url.trim()) {
      return {
        url: 'empty line',
        status: 'error',
        error: 'Empty URL provided'
      };
    }

    let fullUrl = url.trim();
    if (!fullUrl.startsWith('http://') && !fullUrl.startsWith('https://')) {
      fullUrl = `https://${fullUrl}`;
    }

    if (!isValidUrl(fullUrl)) {
      return {
        url,
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
          url,
          status: 'online',
          statusCode: response.status,
          responseTime,
        };
      } else {
        return {
          url,
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
          url,
          status: 'error',
          responseTime,
          error: 'Request timed out (10s)',
        };
      }
      return {
        url,
        status: 'error',
        responseTime,
        error: error.cause?.message || error.message || 'Unknown fetch error',
      };
    }
  });

  return Promise.all(promises);
}
