import React, { Component } from 'react';

class Journalist extends Component {
  render() {
    return (
        <h3>{this.props.journalist.firstName} {this.props.journalist.lastName}</h3>
    );
  }
}

export default Journalist;
