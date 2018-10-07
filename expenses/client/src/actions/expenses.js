import * as expensesApi from '../api/expenses'

export const INIT_EXPENSES = 'INIT_EXPENSES'
export const LIST_EXPENSES = 'LIST_EXPENSES'
export const GET_EXPENSE = 'GET_EXPENSE'

export function initExpenses() {
  return { type: INIT_EXPENSES }
}

export function listExpenses(query) {
  return async dispatch => {
    const { data: expenses, numOfPages: pages } = await expensesApi.list(query)
    dispatch({ type: LIST_EXPENSES, expenses, pages, query })
  }
}

export function getExpense(id) {
  return async dispatch => {
    const expense = await expensesApi.get(id)
    dispatch({ type: GET_EXPENSE, expense })
  }
}
