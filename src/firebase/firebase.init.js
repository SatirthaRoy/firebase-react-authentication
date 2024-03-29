// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4xLMB7WwM9asm3AW6uMg1CpBBM7BKLfA",
  authDomain: "simple-react-firebase-162d8.firebaseapp.com",
  projectId: "simple-react-firebase-162d8",
  storageBucket: "simple-react-firebase-162d8.appspot.com",
  messagingSenderId: "790752842624",
  appId: "1:790752842624:web:2c1a3a1bc3071cd1c02765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;