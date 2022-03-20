
// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";


import {getAuth,signOut  ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
  
  };

firebase.initializeApp(firebaseConfig)
 
export {
  getAuth,signOut ,createUserWithEmailAndPassword, signInWithEmailAndPassword,firebase
}




