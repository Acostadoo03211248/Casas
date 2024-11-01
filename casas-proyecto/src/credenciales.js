// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWDGUhLnaQn4QoHTg32_wkMlzlX7Hre1c",
  authDomain: "compraventacasas-7eebe.firebaseapp.com",
  projectId: "compraventacasas-7eebe",
  storageBucket: "compraventacasas-7eebe.firebasestorage.app",
  messagingSenderId: "942878284327",
  appId: "1:942878284327:web:8a05254ad43a9e0871cc02"
};


// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;