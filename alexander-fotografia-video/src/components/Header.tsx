"use client";

import { logout } from "@/services/auth";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await logout();

    document.cookie = "firebase-auth=; Max-Age=0; path=/;";
    router.push("/");
  };

  return (
    <header className="flex justify-between border-b border-slate-700 p-4">
      <h1 className="text-xl font-bold">PhotoCloud Studios</h1>

      <Link href="/" className="text-blue-400 underline">
        Inicio
      </Link>


      {isLoggedIn && (
        <>
      <Link href="/sessions" className="text-blue-400 underline">
        Agendar citas
      </Link>

      <Link href="/gallery" className="text-blue-400 underline">
        Subir fotos
      </Link>
        <button onClick={handleLogout} className="text-red-400 underline">
          Cerrar sesión
        </button>
      </>)}
    </header>
  );
}