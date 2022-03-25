import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDafEvUiNe7JYzajV7i5GnaWOKM075WUOI",
  authDomain: "twitter-app-a80cd.firebaseapp.com",
  projectId: "twitter-app-a80cd",
  storageBucket: "twitter-app-a80cd.appspot.com",
  messagingSenderId: "421392628141",
  appId: "1:421392628141:web:734b0399f3654126cc4924",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const provider = new firebase.auth.GoogleAuthProvider();
