import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAccess extends Component {
  render() {
    const { username, password } = this.props.user;
    
    return (
      <div>
        { 
          username === 'joao' && password === '1234'
            ? `Welcome, ${username}!`
            : <Redirect to="/">{alert('Access denied!')}</Redirect>
        }
      </div>
    );
  }
}

export default StrictAccess;