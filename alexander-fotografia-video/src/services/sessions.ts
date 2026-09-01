// src/services/sessions.ts
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const createSession = async (data: {
  clientName: string;
  date: string;
  public?: boolean;
}) => {
  const ref = collection(db, "sessions");
  const result = await addDoc(ref, {
    clientName: data.clientName,
    date: data.date,
    public: data.public ?? false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return result.id;
};

export const getSessions = async () => {
  const ref = collection(db, "sessions");
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((docItem) => ({
    id: docItem.id,
    ...docItem.data(),
  }));
};

export const updateSession = async (id: string, data: any) => {
  const ref = doc(db, "sessions", id);
  await updateDoc(ref, {
    ...data,
    updatedAt: new Date(),
  });
};

export const deleteSession = async (id: string) => {
  const ref = doc(db, "sessions", id);
  await deleteDoc(ref);
};

