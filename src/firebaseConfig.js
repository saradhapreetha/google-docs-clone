// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzYbOQslS2_rl5Au2DTil85qrAaJSMjPQ",
  authDomain: "docs-clone-60619.firebaseapp.com",
  projectId: "docs-clone-60619",
  storageBucket: "docs-clone-60619.appspot.com",
  messagingSenderId: "234865251368",
  appId: "1:234865251368:web:12d33a357ba3be2787511d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);