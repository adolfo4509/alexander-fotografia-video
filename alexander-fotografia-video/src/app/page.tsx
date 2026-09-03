"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";
export default function HomePage() {
  const router = useRouter();

  const navigateToSessions = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    if (target) {
      router.push(target);
    }
  };

  return (
    <section className={styles.container}>
      <h1 className="text-3xl font-bold">Alexander Fotografía y Video</h1>
      <p className="text-lg text-slate-300">
        Plataforma de gestión fotográfica en la nube.
      </p>

      <div className={styles.buttonContainer}>
        <Link 
          href="/sessions"
          onClick={(e) => navigateToSessions(e)}
          className={styles.button_sessions}
          
        >
          Ver sesiones
        </Link>

        <Link
          href="/gallery"
          onClick={(e) => navigateToSessions(e)}
          className={styles.button_gallery}
        >
          Subir fotos
        </Link>
         <Link
          href="/catalog"
          onClick={(e) => navigateToSessions(e)}
          className={styles.button_catalog}
        >
        Catalogo de Imagenes
        </Link>
      </div>
    </section>
  );
}
