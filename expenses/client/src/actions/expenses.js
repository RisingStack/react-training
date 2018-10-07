import * as expensesApi from '../api/expenses'

export const LIST_EXPENSES = 'LIST_EXPENSES'
export const LIST_EXPENSES_PENDING = 'LIST_EXPENSES_PENDING'

export function listExpenses(params) {
  return async dispatch => {
    dispatch({ type: LIST_EXPENSES_PENDING })

    const { data: expenses, numOfPages: pages } = await expensesApi.list(params)
    dispatch({ type: LIST_EXPENSES, expenses, pages })
  }
}
