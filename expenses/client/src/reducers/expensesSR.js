import { GET_EXPENSES_SR_PENDING, GET_EXPENSES_SR_SUCCESS, GET_EXPENSES_SR_ERROR } from '../actions/getExpensesSR'

const expensesInitialState = {
  error: null,
  data: [],
  isLoading: false
}

export const expensesSRReducer = (state = expensesInitialState, action) => {
  switch (action.type) {
    case GET_EXPENSES_SR_PENDING:
      return {
        ...state,
        isLoading: true        
      }
    case GET_EXPENSES_SR_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.payload.data,
        offset: action.payload.offset,
        limit: action.payload.limit,
        count: action.payload.count,
        isLoading: false
      }
    case GET_EXPENSES_SR_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
        
      }
    default:
      return state
  }
}
