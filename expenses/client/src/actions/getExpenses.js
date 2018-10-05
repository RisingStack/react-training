import { getExpenses } from '../api/expenses'

export const GET_EXPENSES_PENDING = 'GET_EXPENSES_PENDING'
export const GET_EXPENSES_SUCCESS = 'GET_EXPENSES_SUCCESS'
export const GET_EXPENSES_ERROR = 'GET_EXPENSES_ERROR'

export const getExpensesAction = () => {
  return async dispatch => {
    dispatch({ type: GET_EXPENSES_PENDING })

    try {
      const payload = await getExpenses()
      
      dispatch({ type: GET_EXPENSES_SUCCESS, payload: payload.data })
      return true
    } catch (err) {
      dispatch({ type: GET_EXPENSES_ERROR, payload: err.response })
      return false
    }
  }
}
