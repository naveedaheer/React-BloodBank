import * as firebase from 'firebase'

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyANVd2tCthuOMltArH-QO3FV3TIhaAd36Q",
    authDomain: "aheer-blood-bank.firebaseapp.com",
    databaseURL: "https://aheer-blood-bank.firebaseio.com",
    storageBucket: "aheer-blood-bank.appspot.com",
    messagingSenderId: "507562351854"
  };
 export const firebaseApp = firebase.initializeApp(config);