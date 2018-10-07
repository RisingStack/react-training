import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './Login.css'

export default class LoginPage extends Component {
  render() {
    const { login, errors } = this.props

    return (
      <div className="login-form">
        <h2>Login page</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={login}
          validate={() => errors}
        >
          {() => (
            <Form>
              Email: <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              Password: <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        <Link to="/register">Register</Link>
      </div>
    )
  }
}
