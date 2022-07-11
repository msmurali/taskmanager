import { app } from "./firebase.js";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  arrayUnion,
} from "firebase/firestore";

export const db = getFirestore(app);
export const col = "tasks-collection";

export const addTask = async (uid, data) => {
  const key = `tasks-${uid}`;
  try {
    await updateDoc(doc(db, col, uid), {
      [key]: arrayUnion(data),
    });
  } catch (error) {
    if (error.code === "not-found") {
      await setDoc(doc(db, col, uid), { [`tasks-${uid}`]: [data] });
    } else {
      console.log(error);
    }
  }
};

export const updateTask = async (uid, task) => {
  try {
    await updateDoc(doc(db, col, uid), task);
  } catch (error) {
    console.log(error);
  }
};

export const removeTask = async (uid) => {
  try {
    await deleteDoc(doc(db, col, uid));
  } catch (error) {
    console.log(error);
  }
};
