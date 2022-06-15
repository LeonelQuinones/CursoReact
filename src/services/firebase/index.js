import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBGlU4kDL7TpScQrpooj3Fq069XL1PU3zI",
  authDomain: "backend-curso-react.firebaseapp.com",
  projectId: "backend-curso-react",
  storageBucket: "backend-curso-react.appspot.com",
  messagingSenderId: "559962193316",
  appId: "1:559962193316:web:79e404da0811171c6c1531"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)