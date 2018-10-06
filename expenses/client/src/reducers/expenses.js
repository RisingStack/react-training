import { LIST_EXPENSES } from '../actions/expenses'

export default function expenses(state = [], { type, expenses }) {
  switch (type) {
    case LIST_EXPENSES:
      return expenses
    default:
      return state
  }
}
