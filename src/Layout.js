import React, { Component } from 'react';
import JournalistIndex from './components/journalists/index';
import NewsOrganisationIndex from './components/newsOrganisations/index';

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      activeTab : "journalists"
    }
  }

  switchToJ(){
    let activeTab = "journalists";
    this.setState({activeTab});
  }

  switchToNO(){
    let activeTab = "newsOrganisations";
    this.setState({activeTab});
  }

  render() {
    switch (this.state.activeTab) {
      case "journalists":
        return (
          <div>
            <button onClick={this.switchToJ.bind(this)}>Journalists</button>
            <button onClick={this.switchToNO.bind(this)}>News Organisations</button>
            <JournalistIndex />
          </div>
        );
      case "newsOrganisations":
        return (
          <div>
            <button onClick={this.switchToJ.bind(this)}>Journalists</button>
            <button onClick={this.switchToNO.bind(this)}>News Organisations</button>
            <NewsOrganisationIndex />
          </div>
        );
      default:
        return (
          <div>
            <button onClick={this.switchToJ.bind(this)}>Journalists</button>
            <button onClick={this.switchToNO.bind(this)}>News Organisations</button>
            <JournalistIndex />
          </div>
        );
    }
  }
}

export default Layout;
