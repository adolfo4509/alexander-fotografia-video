"use client";

import { useState } from "react";
import { login } from "@/services/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      if (typeof window !== "undefined") {
        document.cookie = "firebase-auth=true; path=/";
        router.push("/sessions");
      }
    } catch (err: any) {
      setError("Credenciales incorrectas");
    }
  };

  return (
    <section className="space-y-4 max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold">Iniciar sesión</h2>

      <form onSubmit={handleLogin} className="space-y-3">
        <input
          type="email"
          placeholder="Correo"
          className="w-full p-2 rounded bg-slate-800"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-2 rounded bg-slate-800"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-400">{error}</p>}

        <button
          type="submit"
          className="bg-indigo-600 px-4 py-2 rounded text-white w-full"
        >
          Entrar
        </button>
      </form>
    </section>
  );
}
