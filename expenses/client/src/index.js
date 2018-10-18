import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import store from './store'
import { getMe } from './actions/user'
import App from './App'
import './index.css'

// the app has to be wrapped by the state and router context providers
// this is a very common react pattern for external libs (redux, react-router-dom)
function renderApp() {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

// call the /me endpoint before rendering the app
// it checks if the token is still valid and returns with 401 or the current user
// rendering the app before this check could cause flicker and infinite loops
// bad example:
// - I have an expired token
// - the app thinks I'm authenticated and renders the defualt protected page
// - it turns out that my token is expired
// - the app has to re-route to the default public page
// this causes a flicker of pages on page load
// bad example 2:
// - I have an expired token
// - the app routes me to the default protected page
// - it turns out my token is expired
// - I can't do anything at the protected pages
// - I try to go to the login page to get a fresh token, but the app is re-routing me
// to the default protected page (because I have a token)
// - I am stuck
// takeaway: never make authentication assumptions on the client side
// always check tokens with the server
store.dispatch(getMe()).then(renderApp)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
