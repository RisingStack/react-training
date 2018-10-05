import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { autorun, observable, action, decorate } from 'mobx'

class Counter {
  value = 0
  increment() {
    this.value++
  }
  decrement() {
    this.value--
  }
}

decorate(Counter, {
  value: observable,
  increment: action.bound,
  decrement: action.bound
})

const counter = new Counter()

function render() {
  ReactDOM.render(
    <div>
      <p>The value is: {counter.value}</p>
      <button onClick={counter.increment}>Increment</button>
      <button onClick={counter.decrement}>Decrement</button>
    </div>,
    document.getElementById('root')
  )
}

autorun(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
