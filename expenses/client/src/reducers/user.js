import { LOGIN, LOGOUT } from '../actions/user'

// reducers should be pure functions with zero side effects

// never forget to add a default case and a default value (in the argument list)
// for reducers
export function user(state = null, { type, user }) {
  switch (type) {
    case LOGIN:
      return user
    case LOGOUT:
      return null
    default:
      return state
  }
}
