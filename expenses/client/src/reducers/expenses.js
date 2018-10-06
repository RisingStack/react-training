import {
  GET_EXPENSES_PENDING,
  GET_EXPENSES_SUCCESS,
  GET_EXPENSES_ERROR
} from '../actions/getExpenses'

const expensesInitialState = {
  error: null,
  data: []
}

export const expensesReducer = (state = expensesInitialState, action) => {
  switch (action.type) {
    case GET_EXPENSES_PENDING:
      return {
        ...state
      }
    case GET_EXPENSES_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.payload.data
      }
    case GET_EXPENSES_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}
