import { LOGIN, LOGOUT } from '../actions/user'

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
