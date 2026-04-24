
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "fir-2fb99.firebaseapp.com",
  projectId: "fir-2fb99",
  storageBucket: "fir-2fb99.firebasestorage.app",
  messagingSenderId: "310311177376",
  appId: "1:310311177376:web:d06c0202fba3401cc94dc5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}