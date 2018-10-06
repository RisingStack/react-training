import { combineReducers } from 'redux'
import { loadingBarReducer as loadingBar } from 'react-redux-loading-bar'
import user from './user'

export default combineReducers({
  loadingBar,
  user
})
