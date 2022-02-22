// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS1oYCrSz70PLtQyRd0as4i-H9SgtOeso",
  authDomain: "react-authentication-d7e0b.firebaseapp.com",
  projectId: "react-authentication-d7e0b",
  storageBucket: "react-authentication-d7e0b.appspot.com",
  messagingSenderId: "76026515715",
  appId: "1:76026515715:web:0951ba4e20617f9a379936",
  measurementId: "G-L1CJ1XZ122"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;