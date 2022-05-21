import firebase from "firebase";
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCbttrtz9mKLC3Vrjh478hu-42iHFanuRI",
    authDomain: "uber-clone-59f02.firebaseapp.com",
    projectId: "uber-clone-59f02",
    storageBucket: "uber-clone-59f02.appspot.com",
    messagingSenderId: "820656844352",
    appId: "1:820656844352:web:3662049b6181c034b879a5"
  };
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;