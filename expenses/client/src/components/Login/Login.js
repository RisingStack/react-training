import React, { Component } from 'react'
import { Field } from 'redux-form'

import validate from '../../utils/validator'
import loginSchema from '../../utils/loginSchema.json'

import './Login.css'

class Login extends Component {
  handleSubmit = async e => {
    e.preventDefault()
    const { email, password, doLoginUser } = this.props
    const data = validate(loginSchema, {email, password})
    if (data.error) {
      alert(data.error)
      return
    }
    
    doLoginUser(data.email, data.password)
      .then((res) => {
        if (res) this.props.history.push('/protected')
      })
  }

  render() {
    const disabled = this.props.email && this.props.password ? false : true
    const error =
      this.props.session.error &&
      Object.values(this.props.session.error.data).map((el, i) => (
        <p key={i}>{el}</p>
      ))
    return (
      <div className="login-form">
        <h2>LogIn</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <Field
              component="input"
              name="email"
              type="text"
              placeholder="email"
              className="input-style"
            />
          </div>
          <div>
            <Field
              component="input"
              name="password"
              type="password"
              placeholder="password"
              className="input-style"
            />
          </div>
          <button type="submit" className="login-btn" disabled={disabled}>
            {' '}
            Login{' '}
          </button>
        </form>
        {error}
      </div>
    )
  }
}

export default Login
