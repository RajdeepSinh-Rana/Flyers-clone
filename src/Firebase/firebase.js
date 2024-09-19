// src/Firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, deleteDoc, updateDoc, arrayUnion,arrayRemove } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyrNcRw8uPmr5E8YeCfYOcWCwMB39JRPw",
  authDomain: "project1-aeb5b.firebaseapp.com",
  projectId: "project1-aeb5b",
  storageBucket: "project1-aeb5b.appspot.com",
  messagingSenderId: "698523542283",
  appId: "1:698523542283:web:0dc25ce2f5f6dafce2f80e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, doc, getDoc, collection, getDocs, deleteDoc, updateDoc, arrayUnion,arrayRemove, auth };
