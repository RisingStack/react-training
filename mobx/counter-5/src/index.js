import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { observable, action } from 'mobx'
import { Provider } from 'mobx-react'
import App from './App'

class Counter {
  @observable value = 0
  @action.bound
  increment() {
    this.value++
  }
  @action.bound
  decrement() {
    this.value--
  }
}

const counter = new Counter()

ReactDOM.render(
  <Provider counter={counter}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
