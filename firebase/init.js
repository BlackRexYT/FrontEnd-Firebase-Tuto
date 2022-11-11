// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_AeGvy2_e6Ni5ZgWpjAu7V5JymPzgmiI",
  authDomain: "fire-base-practice-a1743.firebaseapp.com",
  projectId: "fire-base-practice-a1743",
  storageBucket: "fire-base-practice-a1743.appspot.com",
  messagingSenderId: "439091574572",
  appId: "1:439091574572:web:4f52016bcb2ec446ab5e89",
  measurementId: "G-P124WXYP83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()
export const db = getFirestore()