import { app } from "./firebase.js";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
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

export const removeTask = async (uid, data) => {
  const key = `tasks-${uid}`;
  try {
    await updateDoc(doc(db, col, uid), {
      [key]: arrayRemove(data),
    });
  } catch (error) {
    console.log(error);
  }
};
