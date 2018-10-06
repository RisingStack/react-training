import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './Register.css'

export default class RegisterPage extends Component {
  register = async values => {
    const { register, history } = this.props
    await register(values)
    history.push('/')
  }

  render() {
    return (
      <div className="reg-form">
        <h2>Register Page</h2>
        <Formik
          initialValues={{ email: '', password: '', name: '' }}
          onSubmit={this.register}
        >
          {() => (
            <Form>
              Email: <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              Password: <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              Name: <Field name="name" />
              <ErrorMessage name="name" component="div" />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
        <Link to="/">Login</Link>
      </div>
    )
  }
}
