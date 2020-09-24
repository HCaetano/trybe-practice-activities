import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAccess from './StrictAccess';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/users/:id"
            render={
              (props) =>
                <Users {...props}
                  greetingMessage={'Good Morning'}
                />
            }
          />
        <Route path="/strict-access">
          <StrictAccess user={ ({username: 'joao', password: '1234'}) }/>
        </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;