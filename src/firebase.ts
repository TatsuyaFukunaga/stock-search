// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsGVEe0LeOJcLqSAtAd8C0uo0b5s6p-Z8",
  authDomain: "stock-search-e2114.firebaseapp.com",
  projectId: "stock-search-e2114",
  storageBucket: "stock-search-e2114.firebasestorage.app",
  messagingSenderId: "621733899701",
  appId: "1:621733899701:web:4f9f7d009a8edcd869fdfc"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);