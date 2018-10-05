import React from 'react'
import ReactDOM from 'react-dom'
import 'web-animations-js'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from './connect'

const state = {
  user: {
    name: 'Rick',
    age: 80
  },
  interests: ['space']
}

ReactDOM.render(
  <Provider value={state}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
