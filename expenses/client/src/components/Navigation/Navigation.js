import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    const { logout } = this.props

    return (
      <div className="logo-header">
        <div className="topnav">
          <NavLink to="/expenses" exact activeClassName="selected">
            Expenses
          </NavLink>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    )
  }
}
