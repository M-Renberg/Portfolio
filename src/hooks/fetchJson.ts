const jsonCache = new Map<string, unknown>();

export default async function fetchJson<T = unknown>(url: string, options: RequestInit = {}): Promise<T> {
  const canCache = !options.method || options.method.toUpperCase() === 'GET';
  if (canCache && jsonCache.has(url)) {
    return jsonCache.get(url) as T;
  }

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: Failed to fetch ${url}`);
  }

  const data = (await response.json()) as T;
  if (canCache) {
    jsonCache.set(url, data);
  }
  return data;
}