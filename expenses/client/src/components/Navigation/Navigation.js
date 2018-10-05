import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { logoutUser } from '../../actions/logout'
import { getItem, AUTHORIZATION } from '../../utils'
import './Navigation.css'

const Navigation = ({ doLogoutUser, history }) => {
  const token = getItem(AUTHORIZATION)
  const deleteToken = () => {
    doLogoutUser()
    history.push('/login')
  }
  return (
    <div className='logo-header'>
      
      <img src='https://resources.risingstack.com/risingstack-logo-2017.svg' alt='logo' className='logo' />
      
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

        {token ? (
          <NavLink
            to="#"
            className="logout-button"
            onClick={deleteToken}
            style={{ float: 'right' }}
          >
            Logout
          </NavLink>
        ) : (
          <div>
            <NavLink
              to="/login"
              activeClassName="selected"
              className='authentication'
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              activeClassName="selected"
              className='authentication'
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return {
    doLogoutUser: () => dispatch(logoutUser())
  }
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Navigation)
)
