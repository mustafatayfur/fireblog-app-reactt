// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import firebase from './firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFsP-qtnVS6Zba9UuiFsDM7oozLY9Jeh4",
  authDomain: "fireblog-app-react-d62d2.firebaseapp.com",
  projectId: "fireblog-app-react-d62d2",
  storageBucket: "fireblog-app-react-d62d2.appspot.com",
  messagingSenderId: "613813282029",
  appId: "1:613813282029:web:a046489b8461d3c8f598e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
