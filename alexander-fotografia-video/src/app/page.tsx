export default function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">PhotoCloud Studios</h1>
      <p className="text-lg text-slate-300">
        Plataforma de gestión fotográfica en la nube.
      </p>

      <div className="space-x-4">
        <a
          href="/sessions"
          className="bg-indigo-600 px-4 py-2 rounded text-white"
        >
          Ver sesiones
        </a>

        <a
          href="/gallery"
          className="bg-slate-700 px-4 py-2 rounded text-white"
        >
          Galerías
        </a>
      </div>
    </section>
  );
}
