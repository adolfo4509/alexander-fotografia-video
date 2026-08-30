import Header from "@/components/Header";
import "./globals.css";
export const metadata = {
  title: "Foto Estudio Alexander",
  description: "Gestión fotográfica en la nube",
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-900 text-slate-100">
        <Header />
        <main className="p-4 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
