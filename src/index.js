import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYzDDvN-qoKetV8v3HsnmuVe9K3jW6mso",
  authDomain: "journojs.firebaseapp.com",
  databaseURL: "https://journojs.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
