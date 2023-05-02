// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAcV-iAZGSgZqBASrFcdqf0HJuM57PnrEY",
  authDomain: "webtech-6f01a.firebaseapp.com",
  projectId: "webtech-6f01a",
  storageBucket: "webtech-6f01a.appspot.com",
  messagingSenderId: "1064878980910",
  appId: "1:1064878980910:web:2782b7cf7c857f3a2f84bf",
  measurementId: "G-BZRZRLWN3G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
