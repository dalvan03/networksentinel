'use client';

import { useState } from 'react';
import type { UrlStatus } from '@/lib/types';
import { checkUrlStatuses } from '@/app/actions';
import { UrlInputForm } from './UrlInputForm';
import { StatusDisplay } from './StatusDisplay';

export default function SentinelDashboard() {
  const [results, setResults] = useState<UrlStatus[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheckUrls = async (urls: string[]) => {
    setIsChecking(true);
    setResults(urls.map(url => ({ url, status: 'checking' })));

    const statuses = await checkUrlStatuses(urls);

    setResults(statuses);
    setIsChecking(false);
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
