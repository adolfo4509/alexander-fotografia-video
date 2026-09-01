import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase"; // tu inicialización



export const getImageUrl = async (path: string) => {
  try {
    const fileRef = ref(storage, path);
    const url = await getDownloadURL(fileRef);
    return url;
  } catch (error) {
    console.error("Error obteniendo la imagen:", error);
    return null;
  }
};
