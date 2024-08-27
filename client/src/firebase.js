// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "mern-estate-312f7.firebaseapp.com",
  projectId: "mern-estate-312f7",
  storageBucket: "mern-estate-312f7.appspot.com",
  messagingSenderId: "192852045568",
  appId: "1:192852045568:web:47647cbd16049d69fecde5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);