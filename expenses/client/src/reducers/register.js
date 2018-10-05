import {
  REGISTER_ERROR,
  REGISTER_PENDING,
  REGISTER_SUCCESS
} from '../actions/register'

const registerInitialState = {
  error: null,
  isLoading: false
}

export const registerReducer = (state = registerInitialState, action) => {
  switch (action.type) {
    case REGISTER_PENDING:
      return {
        ...state,

        error: null,
        isLoading: true
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false
      }
    case REGISTER_ERROR:
      return {
        ...state,

        error: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}
