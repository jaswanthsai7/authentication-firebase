// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByjXELtFJqE24MvlF0_IDX3FuqyUieePM",
  authDomain: "auth-react-firebase-7bbff.firebaseapp.com",
  projectId: "auth-react-firebase-7bbff",
  storageBucket: "auth-react-firebase-7bbff.appspot.com",
  messagingSenderId: "864238744118",
  appId: "1:864238744118:web:60ac2750cd4395702b5e97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
