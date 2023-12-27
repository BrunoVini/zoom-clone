// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrYbcglf6veLjIDOhhKn0xdNvMg2LqNzE",
  authDomain: "zoom-clone-96890.firebaseapp.com",
  projectId: "zoom-clone-96890",
  storageBucket: "zoom-clone-96890.appspot.com",
  messagingSenderId: "242505380953",
  appId: "1:242505380953:web:86c8cfa836ceaafb97ad48",
  measurementId: "G-XHTRW8V5Z3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);