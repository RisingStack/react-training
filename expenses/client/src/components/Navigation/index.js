import { connect } from 'react-redux'
import { logout } from '../../actions/user'

export default connect(
  undefined,
  dispatch => ({
    logout: () => dispatch(logout())
  })
)
