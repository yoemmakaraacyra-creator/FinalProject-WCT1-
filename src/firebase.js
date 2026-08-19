import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBglrf4HQbxr1ZEjYLeS9i5rMAhC7uXqpE",
  authDomain: "finalproject-f3e4f.firebaseapp.com",
  databaseURL:"https://finalproject-f3e4f-default-rtdb.firebaseio.com",
  projectId: "finalproject-f3e4f",
  storageBucket: "finalproject-f3e4f.firebasestorage.app",
  messagingSenderId: "1062890559682",
  appId: "1:1062890559682:web:32983d0f9c6bcc7d8ac35b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);