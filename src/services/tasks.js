import { app } from "./firebase.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export const db = getFirestore(app);
const collection = "tasks";

export const addTask = async (uid, task) => {
  try {
    await setDoc(doc(db, collection, uid), task);
  } catch (error) {
    console.log(error);
  }
};

export const updateTask = async (uid, task) => {
  try {
    await updateDoc(doc(db, collection, uid), task);
  } catch (error) {
    console.log(error);
  }
};

export const removeTask = async (uid) => {
  try {
    await deleteDoc(doc(db, collection, uid));
  } catch (error) {
    console.log(error);
  }
};
