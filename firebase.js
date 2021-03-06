/* 
Author: Dmytro Kavetskyy
This file will allow the application to use the unique apiKey to communicate with the Firebase account.
The two important values are auth and db, which allow for authentication and dabatase storage
*/
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyANEhIAOK0VvGTe-kzMJ14xgQvmNVmozxE",
    authDomain: "messageyou-254ef.firebaseapp.com",
    projectId: "messageyou-254ef",
    storageBucket: "messageyou-254ef.appspot.com",
    messagingSenderId: "239998496883",
    appId: "1:239998496883:web:dad11e8dae437ceb003a06",
    measurementId: "G-0WGPWXKV1W"
  };

  // const firebaseApp = firebase.initializeApp(firebaseConfig);

// let firebaseApp;

// if (firebase.apps.length === 0) {
// 	firebaseApp = firebase.initializeApp(firebaseConfig);
// } else {
// 	firebaseApp = firebase.app();
// }

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };