import Header from "@/components/Header";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'
import "./globals.css";
import React from "react";
export const metadata = {
  title: "Foto Estudio Alexander",
  description: "Gestión fotográfica en la nube",
};

export default async function RootLayout({ children }: { readonly children: React.ReactNode }) {
  const session = await cookies();
if (!session) {
    redirect("/login");
  }
 
  return (
    <html lang="es">
      <body className="bg-slate-900 text-slate-100">
        <Header />
        <main className="p-4 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
