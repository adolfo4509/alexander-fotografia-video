import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-900 text-slate-100">
        <header className="border-b border-slate-700 p-4">
          <h1 className="text-xl font-bold">PhotoCloud Studios</h1>
        </header>
        <main className="p-4 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
