import { storage, db } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

export const uploadPhoto = async (sessionId: string, file: File) => {
  // 1. Crear referencia en Storage
  const storageRef = ref(storage, `sessions/${sessionId}/${file.name}`);

  // 2. Subir archivo
  const snapshot = await uploadBytes(storageRef, file);

  // 3. Obtener URL pública
  const url = await getDownloadURL(snapshot.ref);

  // 4. Guardar metadatos en Firestore
  const photosRef = collection(db, "photos");
  await addDoc(photosRef, {
    sessionId,
    url,               // ✔ ahora sí es un string válido
    uploadedAt: new Date(),
  });

  return url;
};
