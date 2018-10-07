import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './Register.css'

export default class RegisterPage extends Component {
  register = async values => {
    const { register, history } = this.props
    await register(values)
    history.replace('/')
  }

  render() {
    return (
      <div className="reg-form">
        <h2>Register</h2>
        <Formik
          initialValues={{ email: '', password: '', name: '' }}
          onSubmit={this.register}
        >
          {() => (
            <Form>
              <div>
                Email: <Field type="email" name="email" autoFocus />
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                Password:{' '}
                <Field
                  type="password"
                  name="password"
                  autoComplete="current-password"
                />
                <ErrorMessage name="password" component="div" />
              </div>
              <div>
                Name: <Field name="name" autoComplete="name" />
                <ErrorMessage name="name" component="div" />
              </div>
              <button type="submit">Register</button>
            </Form>
          )}
        </Formik>
        <Link to="/login">Login with an existing account</Link>
      </div>
    )
  }
}
