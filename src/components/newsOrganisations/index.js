import React, { Component } from 'react';
import NewNewsOrganisation from './NewNewsOrganisation';
import NewsOrganisation from './NewsOrganisation';
import * as firebase from 'firebase';

class NewsOrganisationIndex extends Component {
  constructor(){
    super();
    this.state = {
      newsOrganisations : []
    }
  }

  componentDidMount(){
    firebase.database().ref().child('newsOrganisations').on('value', snap => {
      let newsOrganisations = [];
      const s = snap.val();
      Object.keys(s).forEach(j => {
        s[j].id = j;
        newsOrganisations.push(s[j]);
      });
      this.setState({newsOrganisations});
    });
  }

  render() {
    return (        
      <div>
        { this.state.newsOrganisations.map(o => {
          return(<NewsOrganisation key={o.id} newsorg={o} />);
        }) }
        <NewNewsOrganisation />
        </div>
    );
  }
}

export default NewsOrganisationIndex;
