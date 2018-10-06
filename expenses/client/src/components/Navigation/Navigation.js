import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    const { logout } = this.props

    return (
      <div className="logo-header">
        <img
          src="https://resources.risingstack.com/risingstack-logo-2017.svg"
          alt="logo"
          className="logo"
        />

        <div className="topnav">
          <NavLink to="/" exact activeClassName="selected">
            Home
          </NavLink>
          <NavLink to="/protected" activeClassName="selected">
            Protected
          </NavLink>
          <NavLink to="/expenses" activeClassName="selected">
            Expenses
          </NavLink>
          <NavLink to="/expenses-sr" activeClassName="selected">
            Expenses SR
          </NavLink>
          <button onClick={logout}>Logout</button>
          )}
        </div>
      </div>
    )
  }
}
