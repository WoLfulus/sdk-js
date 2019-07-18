import { querify } from "./utils/qs";
import { RequestMethod } from "./schemes/http/Request";

/* nodeonlyblock:start */
if (typeof module !== 'undefined' && module.exports) {
  // include external polyfills for NodeJS (must be installed by the user)
  try {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
  } catch (err) {
    throw new Error(`If you're running the SDK under node make sure you install isomorphic-fetch and es6-promise first`);
  }
}
/* nodeonlyblock:end */
if (typeof module === 'undefined' || !module.exports) {
  // include polyfills for browser only
  require('whatwg-fetch');
}

export type RequestBody = any;

export interface RequestOptions {
  url: string;
  method: RequestMethod;
  baseURL?: string;
  body?: RequestBody;
  params?: object;
  skipToJSON?: boolean;
  headers?: Record<string, string>;
  timeout?: number;
  credentials?: RequestInit['credentials'];
}


function withTimeout<T>(fn: () => Promise<T>, timeout: number): Promise<T> {
  return Promise.race<Promise<T>>([
    fn(),
    new Promise((_resolve, reject) => {
      setTimeout(() => reject(new Error(`Timeout of ${timeout} reached`)), timeout);
    })
  ]);
}

async function request<T extends any>(opts: RequestOptions): Promise<T> {
  if (!opts) {
    throw new Error(`Invalid request options: ${opts}`);
  }

  let url = opts.url;
  if (opts.baseURL) {
    url = `${opts.baseURL}/${url}`;
  }
  if (opts.params) {
    url = `${url}?${querify(opts.params)}`
  }
  if (opts.body && typeof opts.body !== 'string') {
    opts.body = JSON.stringify(opts.body);
  }

  const response = await withTimeout(
    () => fetch(url, {
      method: opts.method,
      body: opts.body,
      headers: opts.headers,
      credentials: opts.credentials || 'omit'
    }), opts.timeout || 2000);

  // skip if skipToJSON was set to true
  if (opts && opts.skipToJSON) {
    return await response.text() as any as T;
  }

  // return parsed values
  return await response.json() as T;
}

export { request };