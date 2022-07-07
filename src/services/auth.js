import { app } from "./firebase";

export const auth = app.auth();

export const register = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};
