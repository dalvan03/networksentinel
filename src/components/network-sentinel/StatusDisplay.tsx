'use client';

import type { UrlStatus } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';
import { StatusIcon } from './StatusIcon';
import { Globe } from 'lucide-react';

type StatusDisplayProps = {
  results: UrlStatus[];
  isChecking: boolean;
};

export function StatusDisplay({ results, isChecking }: StatusDisplayProps) {
  const showPlaceholder = !isChecking && results.length === 0;
  const showSkeletons = isChecking && results.every(r => r.status === 'checking');

  return (
    <Card className="bg-card/50 backdrop-blur-sm min-h-[380px]">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Status Report</CardTitle>
      </CardHeader>
      <CardContent>
        {showPlaceholder ? (
          <div className="flex flex-col items-center justify-center text-center text-muted-foreground pt-12">
            <Globe className="h-16 w-16 mb-4" />
            <p className="font-bold">Awaiting your command</p>
            <p>Your URL status report will appear here.</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Status</TableHead>
                <TableHead>URL</TableHead>
                <TableHead className="text-right w-[80px]">Code</TableHead>
                <TableHead className="text-right w-[140px]">Response (ms)</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {showSkeletons
                ? results.map((result, index) => (
                    <TableRow key={`${result.url}-${index}`}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Skeleton className="h-3 w-3 rounded-full" />
                          <Skeleton className="h-4 w-12" />
                        </div>
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                      <TableCell className="text-right">
                        <Skeleton className="h-4 w-8 ml-auto" />
                      </TableCell>
                      <TableCell className="text-right">
                        <Skeleton className="h-4 w-12 ml-auto" />
                      </TableCell>
                      <TableCell>
                        <Skeleton className="h-4 w-full" />
                      </TableCell>
                    </TableRow>
                  ))
                : results.map((result, index) => {
                    const href = result.url?.startsWith('http://') || result.url?.startsWith('https://')
                      ? result.url
                      : `https://${result.url}`;
                    return (
                      <TableRow key={`${result.url}-${index}`} className="transition-opacity animate-in fade-in-25">
                        <TableCell>
                          <StatusIcon status={result.status} />
                        </TableCell>
                        <TableCell className="font-code text-sm truncate max-w-xs">
                          {result.url ? (
                            <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {result.url}
                            </a>
                          ) : (
                            '-'
                          )}
                        </TableCell>
                        <TableCell className="text-right font-code text-sm">{result.statusCode ?? '-'}</TableCell>
                        <TableCell className="text-right font-code text-sm">{result.responseTime ?? '-'}</TableCell>
                        <TableCell className="text-xs text-muted-foreground truncate max-w-sm">{result.error || (result.status === 'online' ? 'OK' : '-')}</TableCell>
                      </TableRow>
                    );
                  })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
