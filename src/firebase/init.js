import firebase from 'firebase';
import firestore from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCPAZZMEwNyHCnensLG5ZxN2qB08m97bK4",
    authDomain: "virtual-banker-86c7a.firebaseapp.com",
    databaseURL: "https://virtual-banker-86c7a.firebaseio.com",
    projectId: "virtual-banker-86c7a",
    storageBucket: "",
    messagingSenderId: "740699907603",
    appId: "1:740699907603:web:bf8b9e3953d4c7d2fc41e6"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp.firestore();