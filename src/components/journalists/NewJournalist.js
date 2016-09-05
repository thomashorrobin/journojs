import React, { Component } from 'react';
import * as firebase from 'firebase';
import shortid from 'shortid';

class NewJournalist extends Component {
  saveJournalist(){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const journalistsRef = firebase.database().ref().child('journalists');
    journalistsRef.child(shortid.generate()).set({ firstName, lastName });
  }
  render() {
    return (
      <div>
        <input id="firstName" placeholder="First Name" type="text"/>
        <br />
        <input id="lastName" placeholder="Last Name" type="text"/>
        <br />
        <input onClick={this.saveJournalist.bind(this)} type="submit"/>
        </div>
    );
  }
}

export default NewJournalist;
