// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyGHpfe-DXMzqwixLTj1PihpOEMoBGJZ0",
  authDomain: "odin-where-is-waldo-game.firebaseapp.com",
  projectId: "odin-where-is-waldo-game",
  storageBucket: "odin-where-is-waldo-game.appspot.com",
  messagingSenderId: "688853943572",
  appId: "1:688853943572:web:5d21d86909bd143ecaee01",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export { firebase, firestore };
