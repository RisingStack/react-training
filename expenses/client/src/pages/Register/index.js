import { connect } from 'react-redux'
import Register from './Register'
import { register } from '../../actions/user'

function mapDispatch(dispatch) {
  return {
    register: user => dispatch(register(user))
  }
}

export default connect(
  undefined,
  mapDispatch
)(Register)
