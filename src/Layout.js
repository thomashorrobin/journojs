import React, { Component } from 'react';
import JournalistIndex from './components/journalists/index';
import NewsOrganisationIndex from './components/newsOrganisations/index';
import * as firebase from 'firebase';

class Layout extends Component {
  constructor(){
    super();
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
      <div>
        <JournalistIndex journalists={this.state.journalists} />
        <NewsOrganisationIndex orgs={this.state.orgs} />
      </div>
    );
  }
}

export default Layout;
