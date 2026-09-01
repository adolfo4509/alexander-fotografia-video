"use client";

import { useEffect, useState } from "react";
import { getPublicSessions } from "@/services/catalog";
import Link from "next/link";
import { getAllImages } from "@/services/storage/getAllImages";
import Image from "next/image";

type Session = {
  id: string;
  title: string;
  client: string;
  date: string;
};

export default function CatalogPage() {

const [imagenes, setImagenes] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const urls = await getAllImages("sessions/9r00Cr82aJn2mgwVqLef/");
      setImagenes(urls);
    };
    load();
  }, []);
  
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Catálogo de sesiones</h2>
      <p className="text-slate-400">
        Selección de sesiones disponibles para clientes sin necesidad de iniciar sesión.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
       
         { imagenes.length > 0 && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold">Imágenes de la sesión:</h4>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  {imagenes.map((url, index) => (
                    <Image
                      key={index}
                      src={url}
                      alt={`Imagen ${index + 1}`}
                      className="rounded-lg"
                      width={500}
                      height={300}
                    />
                  ))}
                </div>
              </div>
            )}
      </div>
    </div>
  );
}
