import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import loginSchema from 'hwsw_schemas/users/login'
import { validate } from '../../utils/validator'
import './Login.css'

export default class LoginPage extends Component {
  validate = values => validate(loginSchema, values)

  render() {
    const { login } = this.props

    return (
      <div className="login-form">
        <h2>Login page</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={login}
          validate={this.validate}
        >
          {() => (
            <Form>
              <div>
                Email: <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                Password: <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <button type="submit">Log In</button>
            </Form>
          )}
        </Formik>
        <Link to="/register">Register a new account</Link>
      </div>
    )
  }
}
