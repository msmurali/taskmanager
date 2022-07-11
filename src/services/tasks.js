import { app } from "./firebase.js";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const db = getFirestore(app);
export const col = "tasks-collection";

export const addTask = async (uid, task) => {
  try {
    await setDoc(doc(db, col, uid), task);
  } catch (error) {
    console.log(error);
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
