import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPJG9q2MWvdDMKQ1tCqa7rONunrFKNO9A",
  authDomain: "jhon-personal.firebaseapp.com",
  projectId: "jhon-personal",
  storageBucket: "jhon-personal.appspot.com",
  messagingSenderId: "1004434224319",
  appId: "1:1004434224319:web:cba0c6e236a0fedff4c20a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)