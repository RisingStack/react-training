import {
  LIST_EXPENSES,
  LIST_EXPENSES_PENDING,
  GET_EXPENSE
} from '../actions/expenses'

export function expenses(state = [], { type, expenses }) {
  switch (type) {
    case LIST_EXPENSES:
      return expenses
    case LIST_EXPENSES_PENDING:
      return []
    default:
      return state
  }
}

export function expensePages(state = -1, { type, pages }) {
  switch (type) {
    case LIST_EXPENSES:
      return pages
    default:
      return state
  }
}

export function isExpensesLoading(state = false, { type }) {
  switch (type) {
    case LIST_EXPENSES_PENDING:
      return true
    case LIST_EXPENSES:
      return false
    default:
      return state
  }
}

export function expense(state = null, { type, expense }) {
  switch (type) {
    case GET_EXPENSE:
      return expense
    default:
      return state
  }
}
