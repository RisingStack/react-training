import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../actions/user'

function mapState(state) {
  return {
    errors: state.formErrors
  }
}

function mapDispatch(dispatch) {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(
  mapState,
  mapDispatch
)(Login)
