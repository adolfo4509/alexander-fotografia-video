"use client";

import { logout } from "@/services/auth";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const protectedRoutes = ["/sessions", "/gallery"];
  const isPrivate = protectedRoutes.some((route) => pathname.startsWith(route));

  const handleLogout = async () => {
    await logout();

    document.cookie = "firebase-auth=; Max-Age=0; path=/;";
    document.cookie = "firebase-auth=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "firebase-auth=; path=/; secure; samesite=lax; Max-Age=0;";

    router.push("/");
  };

  return (
    <header className="border-b border-slate-700 p-4 flex justify-between">
      <h1 className="text-xl font-bold">PhotoCloud Studios</h1>

      {isPrivate && (
        <button onClick={handleLogout} className="text-red-400 underline">
          Cerrar sesión
        </button>
      )}
    </header>
  );
}
