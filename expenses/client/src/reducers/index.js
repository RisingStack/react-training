import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { loadingBarReducer } from 'react-redux-loading-bar'

import { sessionReducer } from './login'
import {registerReducer} from './register'
import { expensesReducer } from './expenses'
import { expensesSRReducer } from './expensesSR'

export default combineReducers({
  form: formReducer,
  loadingBar: loadingBarReducer,
  session: sessionReducer,
  register: registerReducer,
  expenses: expensesReducer,
  expensesSR: expensesSRReducer
})
