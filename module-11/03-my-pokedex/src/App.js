import React from 'react';
import Pokedex from './Pokedex';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <h1>This is my Pokédex</h1>
      <section>
        <Pokedex />
      </section>
    </React.Fragment>
  );
}

export default App;
