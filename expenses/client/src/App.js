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
  componentDidCatch(err) {
    this.props.history.push('/error')
  }

  render() {
    const { user } = this.props

    return (
      <div>
        <LoadingBar />
        {user && <Navigation />}
        <div className="wrapper">
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

export default compose(
  withRouter,
  connect(state => ({ user: state.user }))
)(App)
