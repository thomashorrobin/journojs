import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYzDDvN-qoKetV8v3HsnmuVe9K3jW6mso",
  authDomain: "journojs.firebaseapp.com",
  databaseURL: "https://journojs.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

const auth = firebase.auth();

let signedIn = auth.signInWithEmailAndPassword("thomasroberthorrobin@gmail.com","Waiopehu01");

signedIn.then(() => console.log("signed in"));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
