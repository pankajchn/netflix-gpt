// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEyzbwTaBFBBjQXU090RC_wbt3UyL-u3g",
  authDomain: "netflix-gpt-623b8.firebaseapp.com",
  projectId: "netflix-gpt-623b8",
  storageBucket: "netflix-gpt-623b8.firebasestorage.app",
  messagingSenderId: "11332492286",
  appId: "1:11332492286:web:de6ebcf5ba47d9d6d8feaf",
  measurementId: "G-MXVME36CVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;