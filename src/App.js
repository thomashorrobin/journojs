import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import * as firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    const auth = firebase.auth();
    this.state = {
      loggedOn : false
    }
    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser == null) {
        this.setState({
      loggedOn : false
        });
      } else {
        this.setState({
      loggedOn : true
        });
      }
    });
  }

  signout(){
    firebase.auth().signOut();
  }

  render() {
    if (this.state.loggedOn) {
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>journo js</h2>
            <button onClick={this.signout.bind(this)}>Sign out</button>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Layout />
        </div>
      );
    } else {
      return(
        <h3>Please Clap</h3>
      );
    }
  }
}

export default App;
