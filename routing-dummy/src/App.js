import React, { Component } from 'react';
import { Route, Link, Switch, NavLink } from 'react-router-dom';

function User({ match, history }) {
  return (
    <div>
      <p>User page, the params are {JSON.stringify(match.params)}</p>
      <NavLink to={`${match.url}/settings`} exact activeClassName="active">
        User Settings
      </NavLink>
      <NavLink to={match.url} exact activeClassName="active">
        Profile page
      </NavLink>
      <button onClick={() => history.push(match.url)}>Button to profile</button>
      <Switch>
        <Route path={`${match.path}/settings`} component={UserSettings} />
        <Route path={match.path} component={UserProfile} />
      </Switch>
    </div>
  );
}

function Base({ match }) {
  return <div>Base page</div>;
}

function UserSettings() {
  return <div>User settings page</div>;
}

function UserProfile() {
  return <div>User profile page</div>;
}

class App extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact activeClassName="active">
          Link to Base page
        </NavLink>
        <NavLink to="/user/10" activeClassName="active">
          Link to User page
        </NavLink>
        <Switch>
          <Route path="/user/:id" component={User} />
          <Route path="/" exact component={Base} />
          <div>404 Page Not Found</div>
        </Switch>
      </div>
    );
  }
}

export default App;
