import { combineReducers } from 'redux'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'
import { user } from './user'
import { expenses, expensesPages, isExpensesLoading, expense } from './expenses'
import { formErrors } from './utils'

export default combineReducers({
  loadingBar,
  formErrors,
  user,
  expenses,
  expensesPages,
  isExpensesLoading,
  expense
})
