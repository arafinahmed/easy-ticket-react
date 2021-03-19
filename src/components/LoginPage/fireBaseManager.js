import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); 
 }

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