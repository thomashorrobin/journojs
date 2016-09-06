import React, { Component } from 'react';
import Journalist from './Journalist';
import NewJournalist from './NewJournalist';

class JournalistIndex extends Component {
  render() {
    return (
      <div>
        { this.props.journalists.map(j => {
          return(<Journalist key={j.id} journalist={j} />);
        }) }
        <NewJournalist />
      </div>
    );
  }
}

export default JournalistIndex;
