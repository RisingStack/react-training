import React, { Component } from 'react'
import Profile from './Profile'

export default class App extends Component {
  profileRef = React.createRef()

  onClick = () => this.profileRef.current.highlight()

  render() {
    return (
      <div onClick={this.onClick}>
        <h1>Profile App</h1>
        <Profile points={132} ref={this.profileRef} />
      </div>
    )
  }
}
