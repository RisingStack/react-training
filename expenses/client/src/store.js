import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// a redux store with redux-thunk for async actions
// and optional devtool integration (uncomment the line for that)
export default createStore(
  rootReducer,
  /*window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),*/
  applyMiddleware(thunk)
)
