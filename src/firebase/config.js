// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6nBtHaZO72G8y_tR_vn3a81USRO2dWxA",
  authDomain: "atelier-shop-proyect-react.firebaseapp.com",
  projectId: "atelier-shop-proyect-react",
  storageBucket: "atelier-shop-proyect-react.appspot.com",
  messagingSenderId: "552784386283",
  appId: "1:552784386283:web:5d84151cdc133b738e06ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);