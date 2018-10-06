import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../actions/user'

function mapDispatch(dispatch) {
  return {
    login: user => dispatch(login(user))
  }
}

export default connect(
  undefined,
  mapDispatch
)(Login)
