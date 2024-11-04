// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfxbd8OIpIxveVMCJelRkbGsTOsZejxU0",
  authDomain: "ontheleadstudio-web.firebaseapp.com",
  projectId: "ontheleadstudio-web",
  storageBucket: "ontheleadstudio-web.appspot.com",
  messagingSenderId: "328834522597",
  appId: "1:328834522597:web:18a6cee6f405f1f7b0630c",
  measurementId: "G-KZZ3XVPVLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db
//const analytics = getAnalytics(app);