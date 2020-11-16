import React, { createContext, Component } from 'react';
import './App.css';
import Cars from './Cars';

export const CarContext = createContext();

class App extends Component {
  constructor() {
    super();

    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(color, position) {
    this.setState({ [color]: position });
  }

  render() {
    return (
      <CarContext.Provider value={ { ...this.state, moveCar: this.moveCar } }>
        <Cars />
      </CarContext.Provider>
    );
  }
}

export default App;
