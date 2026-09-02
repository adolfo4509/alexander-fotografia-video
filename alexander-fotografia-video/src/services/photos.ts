import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadPhoto = async (sessionId: string, file: File) => {
  const storageRef = ref(storage, `photos/fotos/${file.name}`);

  const snapshot = await uploadBytes(storageRef, file, {
    contentType: file.type,
    customMetadata: {
      sessionId,
      originalName: file.name,
      uploadedAt: new Date().toISOString(),
    },
  });

  return await getDownloadURL(snapshot.ref);
};