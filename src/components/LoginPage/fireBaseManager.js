import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

 // log in with google 
 export const fireBaseLoginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var user = result.user;
           return user;
        }).catch((error) => {
            return {};
        });
 }

 // sign up with email and password

 export const createUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => { 
      let user = userCredential.user;
      return user;
    })
    .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
      return {};
      // ..
    });
 }