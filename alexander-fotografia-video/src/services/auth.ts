import { auth ,db} from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut,UserCredential } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

export async function login(email: string, password: string) {

  const userCredential : UserCredential  = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user.uid;
  const emailUser = userCredential.user.email;

  // Crear perfil en Firestore si no existe
  if (userCredential) {
    return userCredential;
  }else{
    await ensureUserProfile(user, emailUser ?? "");

  }
}

export async function logout() {
  return await signOut(auth);
}


async function ensureUserProfile(uid: string, email: string) {
 
  try {
    const ref = doc(db, "users", uid);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      await setDoc(ref, {
        email,
        role: "photographer",
        createdAt: new Date(),
      });
    }
  } catch (error) {
        throw error;
  }
}
