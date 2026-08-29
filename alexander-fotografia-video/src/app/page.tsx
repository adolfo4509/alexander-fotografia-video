"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const navigateToSessions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    router.push( e.currentTarget.innerText === "Ver sesiones" ?  "/sessions" : "/gallery");
  };

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Alexander Fotografía y Video</h1>
      <p className="text-lg text-slate-300">
        Plataforma de gestión fotográfica en la nube.
      </p>

      <div className="space-x-4">
        <Link 
          href="/sessions"
          onClick={(e) => navigateToSessions(e)}
          className="bg-indigo-600 px-4 py-2 rounded text-white"
          
        >
          Ver sesiones
        </Link>

        <Link
          href="/gallery"
          onClick={(e) => navigateToSessions(e)}
          className="bg-slate-700 px-4 py-2 rounded text-white"
        >
          Galerías
        </Link>
      </div>
    </section>
  );
}
