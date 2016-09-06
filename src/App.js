import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Journalist from './components/journalists/Journalist';
import NewJournalist from './components/journalists/NewJournalist';
import NewNewsOrganisation from './components/newsOrganisations/NewNewsOrganisation';
import NewsOrganisation from './components/newsOrganisations/NewsOrganisation';
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
    console.log(this.state);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { this.state.journalists.map(j => {
          return(<Journalist key={j.id} journalist={j} />);
        }) }
        <NewJournalist />
        { this.state.orgs.map(o => {
          return(<NewsOrganisation key={o.id} newsorg={o} />);
        }) }
        <NewNewsOrganisation />
      </div>
    );
  }
}

export default App;
