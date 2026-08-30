"use client";

import { useEffect, useState } from "react";
import { getPublicGallery } from "@/services/catalog";

type PublicGalleryProps = {
  readonly params: {
    readonly id: string;
  };
};

export default function PublicGallery({ params }: PublicGalleryProps) {
  const { id } = params;
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getPublicGallery(id);
      setPhotos(data);
    }
    load();
  }, [id]);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Álbum público</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((url, i) => (
          <img
            key={i}
            src={url}
            className="rounded-lg border border-slate-700"
          />
        ))}
      </div>
    </div>
  );
}
