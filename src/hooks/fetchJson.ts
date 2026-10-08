export default async function fetchJson<T = unknown>(url: string, options = {}): Promise<T> {
  const response = await fetch(url, options);
  const data = await response.json();
  return data as T;
}