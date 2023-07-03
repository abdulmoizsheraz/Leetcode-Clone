import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCOegtdiNB_UhFdaZJj-DXr5ua-a4_soVE",
  authDomain: "eatcode-5e13c.firebaseapp.com",
  projectId: "eatcode-5e13c",
  storageBucket: "eatcode-5e13c.appspot.com",
  messagingSenderId: "677904817095",
  appId: "1:677904817095:web:8a33a5099c3f62453897e2"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth=getAuth(app);
const firebase=getFirestore(app);
export {auth,firebase,app};