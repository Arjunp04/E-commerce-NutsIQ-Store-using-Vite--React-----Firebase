// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV2EZXvVD04-Zi884GewMjZu8tNPdA83Q",
  authDomain: "shopzilla-60ed9.firebaseapp.com",
  projectId: "shopzilla-60ed9",
  storageBucket: "shopzilla-60ed9.appspot.com",
  messagingSenderId: "418180050321",
  appId: "1:418180050321:web:3ecd89fc4f3cd3a540be30",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
