import { combineReducers } from 'redux'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'
import user from './user'
import { expenses, expensesPages, isExpensesLoading, expense } from './expenses'

export default combineReducers({
  loadingBar,
  user,
  expenses,
  expensesPages,
  isExpensesLoading,
  expense
})
