// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAItYnxOXuQkTQv2PR3x1KWP4V7vUdZzE",
  authDomain: "frontend-challenge-f99f9.firebaseapp.com",
  projectId: "frontend-challenge-f99f9",
  storageBucket: "frontend-challenge-f99f9.appspot.com",
  messagingSenderId: "87345947264",
  appId: "1:87345947264:web:0b3434a78361b7f5f23c65"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();