import { useState, useEffect } from 'react';
import fetchJson from './fetchJson';

export default function useFetchJson<Data>(url: string) {
  const [fetchedData, setFetchedData] = useState<Data | null>(null);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const data = await fetchJson<Data>(url);
        if (isMounted) setFetchedData(data);
      } catch (err) {
        console.error(`Failed to fetch JSON from ${url}:`, err);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return fetchedData;
}