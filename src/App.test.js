import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCYzDDvN-qoKetV8v3HsnmuVe9K3jW6mso",
  authDomain: "journojs.firebaseapp.com",
  databaseURL: "https://journojs.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

describe('UI tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});

