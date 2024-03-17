// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVarlHz46l5Cztuela0WZ2Wt102K56uxg",
  authDomain: "my-only-portfolio-b802a.firebaseapp.com",
  projectId: "my-only-portfolio-b802a",
  storageBucket: "my-only-portfolio-b802a.appspot.com",
  messagingSenderId: "553434663626",
  appId: "1:553434663626:web:9ed3ac0a1a8fa392fc8233",
  measurementId: "G-YL5FC6S8C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;