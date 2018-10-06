import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import Register from './Register'
import { register } from '../../actions/user'

function mapDispatch(dispatch) {
  return {
    register: user => dispatch(register(user))
  }
}

export default compose(
  withRouter,
  connect(
    undefined,
    mapDispatch
  )
)(Register)
