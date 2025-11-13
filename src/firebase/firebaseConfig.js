// Firebase initialization
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMHSlvV-9RgCUJClqVlHZ56ZtUHCcE-lI",
  authDomain: "pawmart-6e756.firebaseapp.com",
  projectId: "pawmart-6e756",
  storageBucket: "pawmart-6e756.firebasestorage.app",
  messagingSenderId: "681434756280",
  appId: "1:681434756280:web:bc64786e44f5ee0eebf04d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;
