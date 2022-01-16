import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseUtil = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_apiKey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  databaseURL: process.env.REACT_APP_FIREBASE_databaseURL,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
});
export default firebaseUtil;

export const auth = firebaseUtil.auth();
export const firebaseDB = firebaseUtil.database();
export const googleProvider = new firebase.auth.GoogleAuthProvider();


//   const firebaseConfig = {
//     apiKey: "AIzaSyCFsP-qtnVS6Zba9UuiFsDM7oozLY9Jeh4",
//     authDomain: "fireblog-app-react-d62d2.firebaseapp.com",
//     databaseURL: "https://fireblog-app-react-d62d2-default-rtdb.firebaseio.com",
//     projectId: "fireblog-app-react-d62d2",
//     storageBucket: "fireblog-app-react-d62d2.appspot.com",
//     messagingSenderId: "613813282029",
//     appId: "1:613813282029:web:a046489b8461d3c8f598e4"
//   };


// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// export const createUser = (email, password) => {
//   const auth = getAuth(app);



