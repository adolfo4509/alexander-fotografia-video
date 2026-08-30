import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
export async function getPublicSessions() {
  const ref = collection(db, "sessions");

  // Solo sesiones marcadas como públicas
  const q = query(ref, where("public", "==", true));

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}



export async function getPublicGallery(id: string) {
  const ref = doc(db, "sessions", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) return [];

  const data = snapshot.data();

  if (!data || !data.public) return []; // seguridad extra

  return data.photos || [];
}

