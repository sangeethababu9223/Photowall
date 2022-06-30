import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCk0DjdjEBF567uIrXqApezK8E6h6f4z7o",
  authDomain: "photowall-7dcdd.firebaseapp.com",
  databaseURL: "https://photowall-7dcdd-default-rtdb.firebaseio.com",
  projectId: "photowall-7dcdd",
  storageBucket: "photowall-7dcdd.appspot.com",
  messagingSenderId: "998143483109",
  appId: "1:998143483109:web:68dc0afa7d084a8134080c",
  measurementId: "G-BVZJ0F6RJM"
};

initializeApp(firebaseConfig);
const database = getFirestore();

export {database};