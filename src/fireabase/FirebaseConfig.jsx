// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getDatabase} from "firebase/database";

// Your web app's Firebase configurations
const firebaseConfig = {
  apiKey: "AIzaSyBjNcudY9ODkOoQwjOReuypFzfiJaMGFHs",
  authDomain: "marubharuch2.firebaseapp.com",
  databaseURL: "https://marubharuch2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "marubharuch2",
  storageBucket: "marubharuch2.appspot.com",
  messagingSenderId: "214710287934",
  appId: "1:214710287934:web:ab16f2513cf5680afe9b6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);

export {fireDB, auth,database}