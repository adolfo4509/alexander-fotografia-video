"use client";

import { useEffect, useState } from "react";
import { getPublicSessions } from "@/services/catalog";
import Link from "next/link";

type Session = {
  id: string;
  title: string;
  client: string;
  date: string;
};

export default function CatalogPage() {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getPublicSessions();
      setSessions(data as Session[]);
    }
    load();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Catálogo de sesiones</h2>
      <p className="text-slate-400">
        Selección de sesiones disponibles para clientes sin necesidad de iniciar sesión.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sessions.map((s) => (
          <div key={s.id} className="border border-slate-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-slate-300">Cliente: {s.client}</p>
            <p className="text-slate-300">Fecha: {s.date}</p>

            <Link
              href={`/catalog/${s.id}`}
              className="text-blue-400 underline mt-2 inline-block"
            >
              Ver álbum
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
