import {
  INIT_EXPENSES,
  LIST_EXPENSES,
  INIT_EXPENSE,
  GET_EXPENSE
} from '../actions/expenses'

// reducers should be pure functions with zero side effects

// never forget to add a default case and a default value (in the argument list)
// for reducers
export function expenses(state = [], { type, expenses }) {
  switch (type) {
    case LIST_EXPENSES:
      return expenses
    case INIT_EXPENSES:
      return []
    default:
      return state
  }
}

export function expensesPages(state = -1, { type, pages }) {
  switch (type) {
    case LIST_EXPENSES:
      return pages
    default:
      return state
  }
}

export function expense(state = null, { type, expense }) {
  switch (type) {
    case INIT_EXPENSE:
      return null
    case GET_EXPENSE:
      return expense
    default:
      return state
  }
}
