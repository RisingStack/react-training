import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'

import Register from './Register'
import { registerUserAction } from '../../actions/register'

const selector = formValueSelector('registerForm')

function mapStateToProps(state) {
  return {
    register: state.register,
    session: state.session,
    email: selector(state, 'email'),
    password: selector(state, 'password'),
    confirmPassword: selector(state, 'confirmPassword'),
    name: selector(state, 'name')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doRegisterUser: (email, password, name) =>
      dispatch(registerUserAction(email, password, name))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'registerForm'
  })(Register)
)
