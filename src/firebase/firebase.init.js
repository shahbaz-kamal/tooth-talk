// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiMw7ag5rUybTKhm7_JKm2NYKIjedhlhI",
  authDomain: "dentist-websites.firebaseapp.com",
  projectId: "dentist-websites",
  storageBucket: "dentist-websites.firebasestorage.app",
  messagingSenderId: "751336534082",
  appId: "1:751336534082:web:99354bdf3a18858a4ffddb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
