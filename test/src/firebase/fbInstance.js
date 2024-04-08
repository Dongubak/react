// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnrfV1iyoiNr0w7hjA73OMYaDN0Ut2JIs",
  authDomain: "test-13627.firebaseapp.com",
  projectId: "test-13627",
  storageBucket: "test-13627.appspot.com",
  messagingSenderId: "270897585692",
  appId: "1:270897585692:web:be40df758b1dad9135c9d9",
  measurementId: "G-9VZX1MLKVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);