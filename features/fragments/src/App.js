import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Login = () => <h1>Login</h1>
const Admin = () => <h1>Admin</h1>
const Timeline = () => <h1>Timeline</h1>
const NotFound = () => <h1>404!</h1>

export default class App extends Component {
  state = {}

  toggleLogin = () => this.setState({ isLoggedIn: !this.state.isLoggedIn })

  render() {
    const { isLoggedIn } = this.state

    return (
      <>
        <button onClick={this.toggleLogin}>Toggle Login</button>

        <Router>
          <Switch>
            {!isLoggedIn ? (
              <Route path="/" component={Login} />
            ) : (
              <>
                <Route exact path="/" component={Timeline} />
                <Route exact path="/admin" component={Admin} />
              </>
            )}
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </>
    )
  }
}
