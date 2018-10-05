import React, { Component } from 'react'

import { Field } from 'redux-form'

import './Register.css'

class Register extends Component {
  handleSubmit = async e => {
    e.preventDefault()
    const { email, password, confirmPassword, name, doRegisterUser } = this.props
    if (password !== confirmPassword) {
      alert('Passwords don/t match') 
      return
    }
    await doRegisterUser(email, password, name)
    if (this.props.session.isLoggedIn) this.props.history.push('/protected')
  }

  render() {
    const { email, password, name } = this.props
    const disabled = email && password && name ? false : true
    const error =
      this.props.register.error &&
      Object.values(this.props.register.error.data).map((el, i) => (
        <p key={i}>{el}</p>
      ))
    return (
      <div className="reg-form">
        <h2>Register</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <Field
              component="input"
              name="email"
              type="text"
              placeholder="email"
              className="reg-input-style"
            />
          </div>
          <div>
            <Field
              component="input"
              name="password"
              type="password"
              placeholder="password"
              className="reg-input-style"
            />
          </div>
          <div>
          <Field
              component="input"
              name="confirmPassword"
              type="password"
              placeholder="confirm password"
              className="reg-input-style"
            />
          </div>
          <div>
            <Field
              component="input"
              name="name"
              type="text"
              placeholder="name"
              className="reg-input-style"
            />
          </div>
          <button disabled={disabled} type="submit" className="register-btn">
            {' '}
            Register{' '}
          </button>
        </form>
       {error} 
      </div>
    )
  }
}

export default Register
