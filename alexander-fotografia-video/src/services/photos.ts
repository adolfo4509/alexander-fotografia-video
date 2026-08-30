import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function uploadPhoto(file: File, sessionId: string) {
  const photoRef = ref(storage, `sessions/${sessionId}/${file.name}`);
  await uploadBytes(photoRef, file);
  return await getDownloadURL(photoRef);
}
