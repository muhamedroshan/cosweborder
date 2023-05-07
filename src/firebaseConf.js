// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRY4ML2AvMUkdgr17lfhaIXhJsyT1Bnek",
  authDomain: "cos-restaurants.firebaseapp.com",
  projectId: "cos-restaurants",
  storageBucket: "cos-restaurants.appspot.com",
  messagingSenderId: "146549514188",
  appId: "1:146549514188:web:8156de19f763ada18cc769",
  measurementId: "G-6B8LYQFEY9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)