'use client';

import { useEffect, useState } from 'react';
import { createSession, getSessions } from '@/services/sessions';

export function useSessions() {
  const [sessions, setSessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const data = await getSessions();
      setSessions(data);
      setLoading(false);
    })();
  }, []);

  const addSession = async (clientName: string, date: string) => {
    await createSession({ clientName, date });
    const data = await getSessions();
    setSessions(data);
  };

  return { sessions, loading, addSession };
}
