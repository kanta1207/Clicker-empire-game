// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9OFwgN9gNdD81KkLbfccxnbdN0xRikDk",
  authDomain: "clicker-empire-game.firebaseapp.com",
  projectId: "clicker-empire-game",
  storageBucket: "clicker-empire-game.appspot.com",
  messagingSenderId: "869539715790",
  appId: "1:869539715790:web:039ba3d6f4521f98038e9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app , auth, db};