/**
 * linear-sdk · sovereign wrapper for Linear
 * Project Mgmt
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://developers.linear.app/docs
 * Homepage: https://linear.app
 */

export class Linear {
  constructor({ apiKey, baseURL = 'https://linear.app', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://developers.linear.app/docs. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('linear ' + res.status);
    return res.json();
  }
}

export default Linear;

// Metadata
export const meta = {
  "name": "Linear",
  "category": "Project Mgmt",
  "homepage": "https://linear.app",
  "docs_url": "https://developers.linear.app/docs",
  "endpoints_count": 0
};
