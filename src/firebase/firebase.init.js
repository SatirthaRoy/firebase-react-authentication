// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq8jV2yu7CkdwpEmu7pPg_T8qrw6GQog8",
  authDomain: "react-firebase-auth-d2cbe.firebaseapp.com",
  projectId: "react-firebase-auth-d2cbe",
  storageBucket: "react-firebase-auth-d2cbe.appspot.com",
  messagingSenderId: "777572038757",
  appId: "1:777572038757:web:5e86cbefdab3dc5329ae8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;