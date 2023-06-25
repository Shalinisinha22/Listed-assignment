import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";
import {GoogleAuthProvider} from "firebase/auth"




const firebaseConfig = {
    apiKey: "AIzaSyAZnNqFIVNLtcEjWJeCTja5WfshbHBx4NQ",
    authDomain: "assignment-aa863.firebaseapp.com",
    projectId: "assignment-aa863",
    storageBucket: "assignment-aa863.appspot.com",
    messagingSenderId: "744801679895",
    appId: "1:744801679895:web:1a7af3f10b7fbae610fa52"
  };

  firebase.initializeApp(firebaseConfig);
  export const auth=firebase.auth();
  const firestore=firebase.firestore()
  export const database={
    users: firestore.collection('users'),
 
  }

 export const  provider=new GoogleAuthProvider()

  export const storage=firebase.storage()