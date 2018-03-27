import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, NavLink, Redirect, Switch } from 'react-router-dom';
import User from './User';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/user?name=Bob" activeClassName="hurray">
          User
        </NavLink>
        <NavLink to="/" exact activeClassName="hurray">
          Base
        </NavLink>
        <Switch>
          <Route path="/user" component={User} />
          <Route path="/" exact render={() => <div>BASE</div>} />
          <div>Page Not Found</div>
        </Switch>
      </div>
    );
  }
}

export default App;
