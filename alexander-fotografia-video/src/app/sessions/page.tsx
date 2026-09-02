'use client';

import { useSessions } from '@/hooks/useSessions';
import Link from 'next/link';
import { useState } from 'react';

export default function SessionsPage() {
  const { sessions, loading, addSession } = useSessions();
  const [clientName, setClientName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addSession(clientName, date);
    setClientName('');
    setDate('');
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Sesiones fotográficas</h2>

      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          className="w-full rounded bg-slate-800 p-2"
          placeholder="Nombre del cliente"
          value={clientName}
          onChange={e => setClientName(e.target.value)}
        />
        <input
          className="w-full rounded bg-slate-800 p-2"
          type="date"
          placeholder="Fecha de la sesión"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <button className="rounded bg-indigo-600 px-4 py-2" type="submit">
          Crear sesión
        </button>
      </form>

      {loading ? (
        <p>Cargando sesiones...</p>
      ) : (
        <ul className="space-y-2">
          {sessions.map(s => (
            <li key={s.id} className="border border-slate-700 rounded p-2">
              <p className="font-semibold">{s.clientName}</p>
              <p className="text-sm text-slate-400">{s.date}</p>
          
            </li>
            
          ))}
            
        </ul>

      )}

    </section>
  );
}
