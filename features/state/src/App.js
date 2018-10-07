import React, { Component } from 'react'

export default class App extends Component {
  state = { counter: 0 }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 })
    this.setState({ counter: this.state.counter + 1 })

    this.setState(state => ({ counter: state.counter + 1 }))
    this.setState(state => ({ counter: state.counter + 1 }))

    setTimeout(() => {
      this.setState(state => ({ counter: state.counter + 1 }))
      this.setState(state => ({ counter: state.counter + 1 }))
    })
  }

  render() {
    console.log('RENDER')
    const { counter } = this.state

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <p>Counter is at: {counter}</p>
      </div>
    )
  }
}
