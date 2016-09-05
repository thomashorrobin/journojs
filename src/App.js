import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Journalist from './components/journalists/Journalist';
import NewJournalist from './components/journalists/NewJournalist';
import NewNewsOrganisation from './components/newsOrganisations/NewNewsOrganisation';
import * as firebase from 'firebase';

class App extends Component {
  constructor(){
    super();
    // let journalists = [];
    // journalists.push({ id : shortid.generate(), firstName : "Thomas", lastName : "Horrobin" });
    // journalists.push({ id : shortid.generate(), firstName : "Blake", lastName : "Crayton-Brown" });
    this.state = {
      journalists : []
    }
  }

componentDidMount(){
  firebase.database().ref().on('value', snap => {
    this.setState(snap.val());
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
        { Object.keys(this.state.journalists).forEach( key => {
          console.log(key);
          console.log(this.state.journalists[key]);
          return (<Journalist key={key} journalist={this.state.journalists[key]}/>);
        }) }
        <NewJournalist />
        <NewNewsOrganisation />
      </div>
    );
  }
}

export default App;
