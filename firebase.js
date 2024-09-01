// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpOP_e4MN9VDmnM59B_Jf303Xh4t--03I",
  authDomain: "toolhuntf77.firebaseapp.com",
  projectId: "toolhuntf77",
  storageBucket: "toolhuntf77.appspot.com",
  messagingSenderId: "745012697214",
  appId: "1:745012697214:web:5971ae778a01feb742a02f",
  measurementId: "G-BR9837XRTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
