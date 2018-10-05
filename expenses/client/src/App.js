import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Navigation from './components/Navigation/Navigation'
import MainPage from './components/MainPage/MainPage'
import LoginContainer from './components/Login/LoginContainer'
import RegisterContainer from './components/Register/RegisterContainer'
import ExpenseTableContainer from './components/ExpenseTable/ExpenseTableContainer'
import ExpenseTableContainerSR from './components/ExpenseTable/ExpenseTableContainerSR'
import ProtectedPage from './components/ProtectedPage/ProtectedPage'
import NotFound from './components/NotFound/NotFound'
import './App.css'

const App = () => (
  <div>
    <Navigation />
    <LoadingBar />
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <ProtectedRoute exact path="/protected" component={ProtectedPage} />
        <ProtectedRoute
          exact
          path="/expenses"
          component={ExpenseTableContainer}
        />
        <ProtectedRoute
          exact
          path="/expenses-sr"
          component={ExpenseTableContainerSR}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
