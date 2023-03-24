import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCshf4i8bmmFkncCDo27jdsy_PDGc-QkwY",
  authDomain: "storychat-f0196.firebaseapp.com",
  projectId: "storychat-f0196",
  storageBucket: "storychat-f0196.appspot.com",
  messagingSenderId: "438470401803",
  appId: "1:438470401803:web:fb129612ae6f8980a68c0e",
  measurementId: "G-L4VYFK5DBL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
