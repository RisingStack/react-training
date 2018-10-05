import React, { Component } from 'react'
import { connect } from './connect'

class Profile extends Component {
  ref = React.createRef()

  highlight = () => {
    this.ref.current.animate(
      {
        transform: ['none', 'scale(1.01)', 'none']
      },
      300
    )
  }

  render() {
    const { name, age, points } = this.props
    return (
      <div ref={this.ref}>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Points: {points}</p>
      </div>
    )
  }
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps)(Profile)
