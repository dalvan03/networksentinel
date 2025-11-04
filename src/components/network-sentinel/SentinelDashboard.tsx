'use client';

import { useState } from 'react';
import type { UrlStatus } from '@/lib/types';
import { checkUrlStatus } from '@/app/actions';
import { UrlInputForm } from './UrlInputForm';
import { StatusDisplay } from './StatusDisplay';

export default function SentinelDashboard() {
  const [results, setResults] = useState([] as UrlStatus[]);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheckUrls = async (urls: string[]) => {
    setIsChecking(true);
    // Initialize with checking entries
    setResults(urls.map(url => ({ url, status: 'checking' })));

    // Progressive updates: resolve each URL individually
    const updates = await Promise.all(
      urls.map(async (url, index) => {
        const res = await checkUrlStatus(url);
        // Update the specific index in place
        setResults((prev: UrlStatus[]) => {
          const next = [...prev];
          next[index] = res;
          return next;
        });
        return res;
      })
    );

    setIsChecking(false);
    // Ensure final state is consistent (optional)
    setResults(updates);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
      <div className="lg:col-span-2">
        <UrlInputForm onCheck={handleCheckUrls} isChecking={isChecking} />
      </div>
      <div className="lg:col-span-3">
        <StatusDisplay results={results} isChecking={isChecking} />
      </div>
    </div>
  );
}
