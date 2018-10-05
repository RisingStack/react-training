import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'

const store = createStore((state, { by, type }) => {
  switch (type) {
    case 'increment':
      return state + by
    case 'decrement':
      return state - by
    default:
      return state
  }
}, 0)

function render() {
  const count = store.getState()
  ReactDOM.render(
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => store.dispatch({ type: 'increment', by: 2 })}>
        increment
      </button>
      <button onClick={() => store.dispatch({ type: 'decrement', by: 3 })}>
        increment
      </button>
    </div>,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
