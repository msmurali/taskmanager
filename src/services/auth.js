import { app } from "./firebase.js";
import "firebase/auth";

export const auth = app.auth();

export const register = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

export const logout = () => {
  return auth.signOut();
};
