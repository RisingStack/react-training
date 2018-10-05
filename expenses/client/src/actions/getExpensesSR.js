import { getExpensesSR } from '../api/expenses'

export const GET_EXPENSES_SR_PENDING = 'GET_EXPENSES_SR_PENDING'
export const GET_EXPENSES_SR_SUCCESS = 'GET_EXPENSES_SR_SUCCESS'
export const GET_EXPENSES_SR_ERROR = 'GET_EXPENSES_SR_ERROR'

export const getExpensesActionSR = (params) => {
  return async dispatch => {
    dispatch({ type: GET_EXPENSES_SR_PENDING })

    try {
      const payload = await getExpensesSR(params)
      
      dispatch({ type: GET_EXPENSES_SR_SUCCESS, payload: payload.data })
      return true
    } catch (err) {
      dispatch({ type: GET_EXPENSES_SR_ERROR, payload: err.response })
      console.log(err)
      return false
    }
  }
}
