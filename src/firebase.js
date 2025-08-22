// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBS6PVKkU-u0mZktw28hqPRk41uCFzSJ0",
  authDomain: "explore-email-password-a-a7221.firebaseapp.com",
  projectId: "explore-email-password-a-a7221",
  storageBucket: "explore-email-password-a-a7221.firebasestorage.app",
  messagingSenderId: "844140539782",
  appId: "1:844140539782:web:15a0681dc45f24b3dd8607"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Google provider
export const googleProvider = new GoogleAuthProvider();
