// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxpCa-8p6i5ohm-NhW9rRlUuGRzZxcrV0",
  authDomain: "rhapp-5942e.firebaseapp.com",
  projectId: "rhapp-5942e",
  storageBucket: "rhapp-5942e.appspot.com",
  messagingSenderId: "90815885336",
  appId: "1:90815885336:web:a1de3643f8ddbbdbb2d36d",
  measurementId: "G-X5B9VRH691"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);