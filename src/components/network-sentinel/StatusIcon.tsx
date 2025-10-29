import { cn } from '@/lib/utils';

type Status = 'online' | 'offline' | 'error' | 'checking';

const statusConfig: Record<Status, { color: string; shadow: string; label: string }> = {
  online: {
    color: 'bg-green-400',
    shadow: 'drop-shadow-[0_0_4px_#4ade80]',
    label: 'Online',
  },
  offline: {
    color: 'bg-accent',
    shadow: 'drop-shadow-[0_0_4px_hsl(var(--accent))]',
    label: 'Offline',
  },
  error: {
    color: 'bg-accent',
    shadow: 'drop-shadow-[0_0_4px_hsl(var(--accent))]',
    label: 'Error',
  },
  checking: {
    color: 'bg-yellow-400',
    shadow: 'drop-shadow-[0_0_4px_#facc15] animate-pulse',
    label: 'Checking',
  },
};

export function StatusIcon({ status }: { status: Status }) {
  const config = statusConfig[status];
  
  if (!config) return null;

  return (
    <div className="flex items-center gap-2" title={config.label}>
      <div className={cn('h-3 w-3 rounded-full', config.color, config.shadow)} />
      <span className="hidden md:inline font-medium">{config.label}</span>
    </div>
  );
}
