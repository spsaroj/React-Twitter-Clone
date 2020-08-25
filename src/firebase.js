import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCSbuTV3vOZ3mnFzoXQ-1vXLAGJWgb_6x4",
    authDomain: "twitter-clone-f2170.firebaseapp.com",
    databaseURL: "https://twitter-clone-f2170.firebaseio.com",
    projectId: "twitter-clone-f2170",
    storageBucket: "twitter-clone-f2170.appspot.com",
    messagingSenderId: "742131966394",
    appId: "1:742131966394:web:c1c3b07352afb3b9d03d83",
    measurementId: "G-E3TJZJJKMK"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

//   Need to do this. "npm install -g firebase-tools"


const db = firebaseApp.firestore();
export default db;