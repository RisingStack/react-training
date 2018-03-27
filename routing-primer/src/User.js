import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  color: ${props => (props.primary ? 'green' : 'gray')};
  background-color: blue;
`;

const Button2 = Button.extend`
  background-color: black;
`;

class User extends Component {
  render() {
    const { match, history } = this.props;
    return (
      <div className="App">
        <NavLink to={`${match.url}/profile`} activeClassName="hurray">
          Profile
        </NavLink>
        <Button2 primary onClick={() => history.push(`${match.url}/profile`)}>
          Click Me
        </Button2>
        <NavLink to={`${match.url}/settings`} exact activeClassName="hurray">
          Settings
        </NavLink>
        <Switch>
          <Route
            path={`${match.path}/settings`}
            render={() => <div>SETTINGS</div>}
          />
          <Route
            path={`${match.path}/profile`}
            render={() => <div>PROFILE</div>}
          />
        </Switch>
      </div>
    );
  }
}

export default User;
