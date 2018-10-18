import * as expensesApi from '../api/expenses'

// always use variables instead of plain strings for action names
// this makes sure that you get syntax errors instead of shady application logic issues
// when you do an accidental typo
export const INIT_EXPENSES = 'INIT_EXPENSES'
export const LIST_EXPENSES = 'LIST_EXPENSES'
export const INIT_EXPENSE = 'INIT_EXPENSE'
export const GET_EXPENSE = 'GET_EXPENSE'

export function initExpenses() {
  return { type: INIT_EXPENSES }
}

// be careful with async actions
// the returned 'internal' function should be async
// the outer 'factory' function should never be async
// if the outer function is async it will a return a Promise instead of the function for redux
// and it will not work as expected
export function listExpenses(query) {
  return async dispatch => {
    const { data: expenses, numOfPages: pages } = await expensesApi.list(query)
    dispatch({ type: LIST_EXPENSES, expenses, pages, query })
  }
}

export function getExpense(id) {
  return async dispatch => {
    dispatch({ type: INIT_EXPENSE })

    const expense = await expensesApi.get(id)
    dispatch({ type: GET_EXPENSE, expense })
  }
}
