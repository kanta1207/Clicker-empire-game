import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDOi35pgcAitN4dj3uHzEzyYIn9_z0_snE",
  authDomain: "bulletin-board-app-f834e.firebaseapp.com",
  projectId: "bulletin-board-app-f834e",
  storageBucket: "bulletin-board-app-f834e.appspot.com",
  messagingSenderId: "336494371699",
  appId: "1:336494371699:web:56a6f7d6de095044089b06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize authentification
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const db = getFirestore(app);

export {auth,provider,db};
