import React, { Component } from 'react';
import NewNewsOrganisation from './NewNewsOrganisation';
import NewsOrganisation from './NewsOrganisation';

class NewsOrganisationIndex extends Component {
  render() {
    return (        
      <div>
        { this.props.orgs.map(o => {
          return(<NewsOrganisation key={o.id} newsorg={o} />);
        }) }
        <NewNewsOrganisation />
        </div>
    );
  }
}

export default NewsOrganisationIndex;
