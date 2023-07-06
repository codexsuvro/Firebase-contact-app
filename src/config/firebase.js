// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2MLec_l08ATQ_3VFnUXzHMjZhGdss8Es",
  authDomain: "vite-contact-codexsuvro.firebaseapp.com",
  projectId: "vite-contact-codexsuvro",
  storageBucket: "vite-contact-codexsuvro.appspot.com",
  messagingSenderId: "37592904203",
  appId: "1:37592904203:web:74212d18d16fca40f3cd0e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);