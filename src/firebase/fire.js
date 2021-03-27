import firebase from "firebase";

// web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB-MSiHmS4hyjXp12RBfIqZKPex6ylDp4Y",
  authDomain: "finalproject-da8f3.firebaseapp.com",
  projectId: "finalproject-da8f3",
  storageBucket: "finalproject-da8f3.appspot.com",
  messagingSenderId: "255897708853",
  appId: "1:255897708853:web:4736958bb714033ac0447c",
};
// initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
