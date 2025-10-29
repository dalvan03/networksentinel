export type UrlStatus = {
  url: string;
  status: 'online' | 'offline' | 'error' | 'checking';
  statusCode?: number;
  responseTime?: number;
  error?: string;
};
