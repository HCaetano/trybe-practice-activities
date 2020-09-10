import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props;

    return (
      <div className="pokemon">
        <div className="pokemon-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>Weight: {averageWeight.value} kg</p>
        </div>
        <div className="pokemon-picture"><img src={image} /></div>
      </div>
    )
  };
}

export default Pokemon;