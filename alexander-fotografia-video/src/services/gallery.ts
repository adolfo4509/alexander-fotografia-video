import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function savePhotoUrl(sessionId: string, url: string) {
  await addDoc(collection(db, `photos`), {
    url,
    createdAt: new Date().toISOString(),
  });
}

export async function getPhotos(sessionId: string) {
   const snapshot = await getDocs(collection(db, `photos`));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
