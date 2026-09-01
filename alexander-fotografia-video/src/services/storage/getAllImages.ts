import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase"; // tu inicialización


export const getAllImages = async (folder: string) => {
  try {
    const folderRef = ref(storage, folder);
    const result = await listAll(folderRef);

    const urls = await Promise.all(
      result.items.map(item => getDownloadURL(item))
    );

    return urls;
  } catch (error) {
    console.error("Error listando imágenes:", error);
    return [];
  }
};
