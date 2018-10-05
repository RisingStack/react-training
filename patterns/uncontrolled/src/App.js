import React, { Component } from 'react'
import Search from './Search'

export default class App extends Component {
  state = {}

  onSearch = value => this.setState({ query: value })

  render() {
    const { query } = this.state

    return (
      <div>
        <Search onSearch={this.onSearch} placeholder="Search ..." />
        {query && <p>Searching for {query}</p>}
      </div>
    )
  }
}
