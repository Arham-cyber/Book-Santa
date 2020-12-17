import firebase from 'firebase';
require ('@firebase/firestore')
var firebaseConfig = {
  apiKey: "AIzaSyDxSNKJkcOM9BA_dPGzEiSFQz6uorAeF24",
  authDomain: "book-santa-18837.firebaseapp.com",
  databaseURL: "https://book-santa-18837.firebaseio.com",
  projectId: "book-santa-18837",
  storageBucket: "book-santa-18837.appspot.com",
  messagingSenderId: "399790695305",
  appId: "1:399790695305:web:dcf8ae41dc7fcd40a0b758"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();