import React, { Component } from 'react'

export default class App extends Component {
  state = {}

  toggleDate = () => this.setState({ showDate: !this.state.showDate })

  componentDidCatch(err) {
    this.setState({ hasError: true })
  }

  render() {
    const { showDate, hasError } = this.state

    return (
      <div>
        <h1>Error boundaries app</h1>
        <button onClick={this.toggleDate}>Toggle Date</button>
        {hasError ? 'Oops, something bad happened' : showDate && new Date()}
      </div>
    )
  }
}
