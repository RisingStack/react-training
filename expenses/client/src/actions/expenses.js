import * as expensesApi from '../api/expenses'

export const LIST_EXPENSES = 'LIST_EXPENSES'

export function listExpenses(params) {
  return async dispatch => {
    const expenses = await expensesApi.list(params)
    dispatch({ type: LIST_EXPENSES, expenses })
  }
}
