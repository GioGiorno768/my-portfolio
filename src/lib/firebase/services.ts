import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore/lite";
import app from "./init";

const firestore = getFirestore(app);

export async function login(data: { email: string }) {
  const q = query(
    collection(firestore, "users"),
    where("email", "==", data.email)
  );

  const snapshot = await getDocs(q);
  const user = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  if (user) {
    return user[0];
  } else {
    return null;
  }
}
