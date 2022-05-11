// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrML9aDYZ7e-FtKncBIgMN97lXBENqISo",
  authDomain: "reactblogapp-d5d09.firebaseapp.com",
  databaseURL: "https://reactblogapp-d5d09-default-rtdb.firebaseio.com",
  projectId: "reactblogapp-d5d09",
  storageBucket: "reactblogapp-d5d09.appspot.com",
  messagingSenderId: "827029322011",
  appId: "1:827029322011:web:1435a8230fa9281ea53bbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize the database of a project inside the project through firestore
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// generates the instance of class for us
