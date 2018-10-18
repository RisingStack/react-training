import React, { Component } from 'react'
import { Route, Switch, Link, withRouter, Redirect } from 'react-router-dom'
import { compose } from 'recompose'
import LoadingBar from 'react-redux-loading-bar'
import { connect } from 'react-redux'
import Navigation from './components/Navigation'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import ExpensesPage from './pages/Expenses'
import ExpensePage from './pages/Expense'
import ErrorPage from './pages/Error'
import NotFoundPage from './pages/NotFound'
import './App.css'

class App extends Component {
  // this is a react lifecycle method
  // react will call this when an error happens during rendering or lifecycle methods
  // always have a last resort fallback implemented here instead of letting the app crash
  // displaying an error screen is the most common solution
  componentDidCatch(err) {
    this.props.history.push('/error')
  }

  render() {
    const { user } = this.props

    return (
      <div>
        {/* Having multiple loaders scattered across the page is a bad practice
          Have a single loder at a central place (usually top of the page) so
          the user can get used to the page layout quickly */}
        <LoadingBar />
        {user && <Navigation />}
        <div className="wrapper">
          {/* render a router for the protected pages if there is a logged in user
            or the public pages if there is no logged in user
            protected pages should never be rendered in any way if there is no logged in user */}
          {user ? (
            <Switch>
              <Route exact path="/expenses" component={ExpensesPage} />
              <Route exact path="/expenses/:id" component={ExpensePage} />
              <Redirect exact from="/" to="/expenses" />
              <Route exact path="/error" component={ErrorPage} />
              <Route component={NotFoundPage} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/register" component={RegisterPage} />
              <Route path="/login" component={LoginPage} />
              <Route exact path="/error" component={ErrorPage} />
              <Redirect to="/login" />
            </Switch>
          )}
        </div>
      </div>
    )
  }
}

// this is HOC (Higher Order Component) wrapper
// it is a very common patter in combination with providers (see index.js file)
// a lot of react libs use this combination (redux, react-router-dom)
// it is mainly used to inject component props from somewhere external
// (like the global store in case of redux)
export default compose(
  withRouter,
  connect(state => ({ user: state.user }))
)(App)
