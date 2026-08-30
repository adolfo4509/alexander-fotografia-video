import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

const SESSIONS_COLLECTION = 'sessions';

export async function createSession(data: {
  clientName: string;
  date: string;
}) {
   addDoc(collection(db, SESSIONS_COLLECTION), {
    ...data,
    createdAt: new Date().toISOString(),
  });
}

export async function getSessions() {
  const snapshot = await getDocs(collection(db, SESSIONS_COLLECTION));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
