import { combineReducers } from 'redux'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'
import { user } from './user'
import { expenses, expensesPages, expense } from './expenses'
import { formErrors } from './utils'

// having a flat state is a good practice with redux, try not to go deeper then 1-2 levels
// a flat state structure can be understood by a glance at the root reducer (this file)
export default combineReducers({
  loadingBar,
  formErrors,
  user,
  expenses,
  expensesPages,
  expense
})
