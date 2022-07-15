import { app } from "./firebase.js";
import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

export const db = getFirestore(app);
export const col = "tasks-collection";

export const addTask = async (uid, data) => {
  const key = uuid();
  try {
    await updateDoc(doc(db, col, uid), {
      [key]: data,
    });
  } catch (error) {
    if (error.code === "not-found") {
      await setDoc(doc(db, col, uid), { [key]: data });
    } else {
      console.log(error);
    }
  }
};

export const updateTask = async (uid, data, id) => {
  const key = id;
  try {
    await updateDoc(doc(db, col, uid), {
      [key]: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const removeTask = async (uid, taskId) => {
  try {
    await updateDoc(doc(db, col, uid), {
      [taskId]: deleteField(),
    });
  } catch (error) {
    console.log(error);
  }
};
