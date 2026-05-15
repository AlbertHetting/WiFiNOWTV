// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAUuBcP8GyW3ZHD0mmTMqxgjPwMSwkBz4",

  authDomain: "wifinowtv.firebaseapp.com",

  databaseURL:
    "https://wifinowtv-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "wifinowtv",

  storageBucket: "wifinowtv.firebasestorage.app",

  messagingSenderId: "929004663892",

  appId: "1:929004663892:web:24a2994e691d576445a9c1",

  measurementId: "G-WVXJ78XYLN",
};

const app = initializeApp(firebaseConfig);

// Reusable SDK instances
export const auth = getAuth(app);
export const db = getFirestore(app);
setPersistence(auth, browserLocalPersistence).catch(console.error);
