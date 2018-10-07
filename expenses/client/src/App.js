import React, { Fragment } from 'react'
import { Route, Switch, Link, withRouter, Redirect } from 'react-router-dom'
import { compose } from 'recompose'
import LoadingBar from 'react-redux-loading-bar'
import { connect } from 'react-redux'
import Navigation from './components/Navigation'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import ExpensesPage from './pages/Expenses'
import NotFound from './pages/NotFound'
import './App.css'

function App({ user }) {
  return (
    <div>
      <LoadingBar />
      {user && <Navigation />}
      <div className="wrapper">
        {user ? (
          <Switch>
            <Route exact path="/expenses" component={ExpensesPage} />
            <Redirect exact from="/" to="/expenses" />
            <Route component={NotFound} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Redirect to="/login" />
          </Switch>
        )}
      </div>
    </div>
  )
}

export default compose(
  withRouter,
  connect(state => ({ user: state.user }))
)(App)
