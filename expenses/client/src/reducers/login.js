import { LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS } from '../actions/login'

const sessionInitialState = {
  error: null,
  isLoggedIn: false,
  user: {}
}

export const sessionReducer = (state = sessionInitialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return {
        ...state        
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        error: null,
        user: action.payload.user
      }
    case LOGIN_ERROR:
      return {
        ...state,

        error: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}
