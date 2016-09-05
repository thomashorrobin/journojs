import React, { Component } from 'react';

class NewsOrganisation extends Component {
  render() {
    return (        
      <h5>{this.props.newsorg.name}</h5>
    );
  }
}

export default NewsOrganisation;
