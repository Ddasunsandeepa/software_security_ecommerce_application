// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbvHgnNSd52fpAFGp26aTRkXxw-RvMi08",
  authDomain: "project-ecommerce-18454.firebaseapp.com",
  projectId: "project-ecommerce-18454",
  storageBucket: "project-ecommerce-18454.firebasestorage.app",
  messagingSenderId: "1069969215266",
  appId: "1:1069969215266:web:e4499031f5eb227adf9f7b",
};
fetch(
  `https://www.googleapis.com/identitytoolkit/v3/relyingparty/getProjectConfig?key=${process.env.REACT_APP_FIREBASE_API_KEY}`
)
  .then((res) => res.json())
  .then((data) => console.log("Config Check:", data))
  .catch((err) => console.error("Error:", err));

// Initialize Firebase
export const fireBase = initializeApp(firebaseConfig);
