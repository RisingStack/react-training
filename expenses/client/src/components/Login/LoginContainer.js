import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'

import Login from './Login'
import { loginUserAction } from '../../actions/login'


const selector = formValueSelector('loginForm')

function mapStateToProps(state) {
  return {
    session: state.session,
    email: selector(state, 'email'),
    password: selector(state, 'password')
  }
}

function mapDispatchToProps(dispatch) {
  return {
    doLoginUser: (email, password) => dispatch(loginUserAction(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: 'loginForm'
  })(Login)
)