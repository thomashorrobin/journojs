import React, { Component } from 'react';
import Journalist from './Journalist';
import NewJournalist from './NewJournalist';
import * as firebase from 'firebase';

class JournalistIndex extends Component {
  constructor(){
    super();
    this.state = {
      journalists : []
    }
  }

  componentDidMount(){
    firebase.database().ref().child('journalists').on('value', snap => {
      let journalists = [];
      const s = snap.val();
      Object.keys(s).forEach(j => {
        s[j].id = j;
        journalists.push(s[j]);
      });
      this.setState({journalists});
    });
  }

  render() {
    return (
      <div>
        { this.state.journalists.map(j => {
          return(<Journalist key={j.id} journalist={j} />);
        }) }
        <NewJournalist />
      </div>
    );
  }
}

export default JournalistIndex;
