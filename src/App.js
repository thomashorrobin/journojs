import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JournalistIndex from './components/journalists/index';
import NewsOrganisationIndex from './components/newsOrganisations/index';
import * as firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    // let journalists = [];
    // journalists.push({ id : shortid.generate(), firstName : "Thomas", lastName : "Horrobin" });
    // journalists.push({ id : shortid.generate(), firstName : "Blake", lastName : "Crayton-Brown" });
    this.state = {
      journalists : [],
      orgs : []
    }
  }

componentDidMount(){
  firebase.database().ref().on('value', snap => {
    var journalists = [];
    var orgs = [];
    const obj = snap.val();
    Object.keys(obj.journalists).forEach(j => {
      obj.journalists[j].id = j;
      journalists.push(obj.journalists[j]);
    });
    Object.keys(obj.newsOrganisations).forEach(o => {
      obj.newsOrganisations[o].id = o;
      orgs.push(obj.newsOrganisations[o]);
    });
    this.setState({journalists, orgs});
  });
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <JournalistIndex journalists={this.state.journalists} />
        <NewsOrganisationIndex orgs={this.state.orgs} />
      </div>
    );
  }
}

export default App;
