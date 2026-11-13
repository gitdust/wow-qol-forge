import { useEffect, useState } from 'react';

const endpoint = `${import.meta.env.BASE_URL}api/downloads`;

function parseCounts(value: unknown): Record<string, number> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Invalid counts');
  return Object.fromEntries(Object.entries(value).filter((entry): entry is [string, number] =>
    typeof entry[1] === 'number' && Number.isSafeInteger(entry[1]) && entry[1] >= 0));
}

export function useDownloadCounts() {
  const [counts, setCounts] = useState<Record<string, number> | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch(endpoint, { cache: 'no-store', signal: controller.signal })
      .then(async response => {
        if (response.ok) setCounts(parseCounts(await response.json()));
      }).catch(() => {});
    return () => controller.abort();
  }, []);
  const recordDownload = (moduleIds: string[]) => {
    void fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ moduleIds }),
      keepalive: true,
    }).then(async response => {
      if (response.ok) setCounts(parseCounts(await response.json()));
    }).catch(() => {});
  };
  return { counts, recordDownload };
}
