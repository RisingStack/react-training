import React, { Component } from 'react'

export default class App extends Component {
  state = {}

  onChange = ev => this.setState({ [ev.target.name]: ev.target.value })

  render() {
    const { name, age } = this.state
    return (
      <div onChange={this.onChange}>
        Name: <input name="name" value={name} />
        Name: <input name="name" value={name} />
        Age: <input type="number" value={age} />
      </div>
    )
  }
}
