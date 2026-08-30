"use client";

import { useState, useEffect } from "react";
import { uploadPhoto } from "@/services/photos";
import { savePhotoUrl, getPhotos } from "@/services/gallery";

export default function GalleryPage({ params }: { params: { sessionId: string } }) {
  const { sessionId } = params;
  const [photos, setPhotos] = useState<any[]>([]);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getPhotos(sessionId);
      setPhotos(data);
    })();
  }, [sessionId]);
console.log("sessionId", sessionId, "photos", photos);
  const handleUpload = async () => {
    if (!file) return;

    const url = await uploadPhoto(file, sessionId);
    await savePhotoUrl(sessionId, url);

    const updated = await getPhotos(sessionId);
    setPhotos(updated);
  };

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Galería de la sesión</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="bg-slate-800 p-2 rounded"
      />

      <button
        onClick={handleUpload}
        className="bg-indigo-600 px-4 py-2 rounded text-white"
      >
        Subir foto
      </button>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((p) => (
          <img
            key={p.id}
            src={p.url}
            className="rounded border border-slate-700"
          />
        ))}
      </div>
    </section>
  );
}
