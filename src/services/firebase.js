import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD51_KDrFlRfQdKzyfHaHmC_ARo_HXKPHU",
  authDomain: "ms-taskmanager.firebaseapp.com",
  projectId: "ms-taskmanager",
  storageBucket: "ms-taskmanager.appspot.com",
  messagingSenderId: "631964128144",
  appId: "1:631964128144:web:fb6236bc17933edf541915",
};

export const app = firebase.initializeApp(firebaseConfig);
