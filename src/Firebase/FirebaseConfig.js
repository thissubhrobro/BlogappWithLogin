// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxYAM-aAMzOBZ7JKK1Vb-BYN4U4FY1R7U",
  authDomain: "blogproject-28e0f.firebaseapp.com",
  projectId: "blogproject-28e0f",
  storageBucket: "blogproject-28e0f.appspot.com",
  messagingSenderId: "312407951147",
  appId: "1:312407951147:web:d85c90a37049527052276e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize the database of a project inside the project through firestore
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// generates the instance of class for us
