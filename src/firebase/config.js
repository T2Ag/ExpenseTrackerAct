
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvFl4mjb7wYr_sJtZRzsgcveAXvt7Rj8w",
  authDomain: "todos-e7c30.firebaseapp.com",
  projectId: "todos-e7c30",
  storageBucket: "todos-e7c30.appspot.com",
  messagingSenderId: "231957969072",
  appId: "1:231957969072:web:ed4e7a21603fe5aab8a375",
  measurementId: "G-S6WZGW8CP1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();

export default db