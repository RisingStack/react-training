import React from 'react'
import { connect } from './connect'

function Profile({ name, age, points }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Points: {points}</p>
    </div>
  )
}

const mapStateToProps = state => state.user

export default connect(mapStateToProps)(Profile)
