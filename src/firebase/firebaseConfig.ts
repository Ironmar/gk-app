import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUH-xbNsI8mGIPOEJIIj4OwqeQc-ixOVU",
  authDomain: "gk-app-976ea.firebaseapp.com",
  projectId: "gk-app-976ea",
  storageBucket: "gk-app-976ea.appspot.com",
  messagingSenderId: "229903621933",
  appId: "1:229903621933:web:1910542a955cec54233da4",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
