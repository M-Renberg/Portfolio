import { useState, useEffect } from 'react';
import fetchJson from './fetchJson';

export default function useFetchJson<Data>(url: string) {
  const [fetchedData, setFetchedData] = useState<Data | null>(null);

  useEffect(() => {
    (async () => {
      const data = await fetchJson(url);
      setFetchedData(data);
    })();
  }, [url]);

  return fetchedData;
}