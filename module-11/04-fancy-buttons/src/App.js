import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      clicksFirstButton: 0,
      clicksSecondButton: 0,
      clicksThirdButton: 0
    }

    this.handleClickFirstButton = this.handleClickFirstButton.bind(this);
    this.handleClickSecondButton = this.handleClickSecondButton.bind(this);
    this.handleClicksThirdButton = this.handleClicksThirdButton.bind(this);
  }

  handleClickFirstButton() {
    this.setState((prevState) => ({
      clicksFirstButton: prevState.clicksFirstButton + 1
    }));
  }

  handleClickSecondButton() {
    this.setState((prevState) => ({
      clicksSecondButton: prevState.clicksSecondButton + 1
    }));
  }

  handleClicksThirdButton() {
    this.setState((prevState) => ({
      clicksThirdButton: prevState.clicksThirdButton + 1
    }));
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClickFirstButton}>{this.state.clicksFirstButton}</button>
        <button onClick={this.handleClickSecondButton}>{this.state.clicksSecondButton}</button>
        <button onClick={this.handleClicksThirdButton}>{this.state.clicksThirdButton}</button>
      </div>
    );
  }
}

export default App;