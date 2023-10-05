// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7q9-uTqBWHB3Ir69k94ayHhn6Jm-P-l0",
  authDomain: "clone-4e20c.firebaseapp.com",
  projectId: "clone-4e20c",
  storageBucket: "clone-4e20c.appspot.com",
  messagingSenderId: "1038938007269",
  appId: "1:1038938007269:web:ae167d3d1818526564160c",
  measurementId: "G-YZ1STJXPB3"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const analytics = getAnalytics(app);

export { db, auth };