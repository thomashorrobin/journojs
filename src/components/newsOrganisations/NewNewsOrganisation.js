import React, { Component } from 'react';
import * as firebase from 'firebase';
import shortid from 'shortid';

class NewNewsOrganisation extends Component {
  saveNewsOrganisation(){
    const name = document.getElementById('name').value;
    const newsOrganisationsRef = firebase.database().ref().child('newsOrganisations');
    newsOrganisationsRef.child(shortid.generate()).set({ name });
  }
  render() {
    return (
      <div>
        <input id="name" placeholder="Organisation's Name" type="text"/>
        <br />
        <input onClick={this.saveNewsOrganisation.bind(this)} type="submit"/>
        </div>
    );
  }
}

export default NewNewsOrganisation;
