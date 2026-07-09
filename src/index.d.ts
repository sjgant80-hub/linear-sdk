/**
 * linear-sdk TypeScript declarations
 */
export interface LinearOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Linear {
  constructor(options?: LinearOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Linear;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
