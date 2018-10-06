import { connect } from 'react-redux'
import { logout } from '../../actions/user'
import Navigation from './Navigation'

export default connect(
  undefined,
  dispatch => ({
    logout: () => dispatch(logout())
  })
)(Navigation)
