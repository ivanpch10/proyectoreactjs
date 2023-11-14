//<import {initializeApp} from "firebase/app"
//import {getFirestore} from 'firebase/firestore'

// Import the functions you need from the SDKs you need;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
  //apiKey: "AIzaSyAdAYQGU3mnfqpteHKeHWDqAH6DH9ANrl0",
  //authDomain: "caresaludjs.firebaseapp.com",
  //projectId: "caresaludjs",
  //storageBucket: "caresaludjs.appspot.com",
  //messagingSenderId: "945411648516",
  //appId: "1:945411648516:web:3508d91a17fa4c3986d951",
  //measurementId: "G-23T763NLS2"
//}; 

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//export const db = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdAYQGU3mnfqpteHKeHWDqAH6DH9ANrl0",
  authDomain: "caresaludjs.firebaseapp.com",
  projectId: "caresaludjs",
  storageBucket: "caresaludjs.appspot.com",
  messagingSenderId: "945411648516",
  appId: "1:945411648516:web:3508d91a17fa4c3986d951",
  measurementId: "G-23T763NLS2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);