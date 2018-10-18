import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { formErrors } from '../actions/utils'
import store from '../store'

// handle everything http related at an API layer (header, authentication, ...)

const TOKEN_KEY = 'JWT_TOKEN'

// have a base HTTP instance that you use for all networking to avoid boilerplate
// this instance should include all common logic (authentication, headers, timeout, ...)
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000
})

// this function saves the passed token to the localStorage and the base api instance
// saving to localStorage ensures that we have a session (across page reloads)
// savig to the base api instance avoids boilerplate as the from then on all requests
// will be automatically authenticated (they will include the token in the Auth header/cookie)
function authorize(token) {
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
    localStorage.setItem(TOKEN_KEY, token)
  }
}

function unauthorize() {
  delete api.defaults.headers.Authorization
  localStorage.removeItem(TOKEN_KEY)
}

// check if we have a previous token from a session
// and add it to the base api to aunthenticate all requests from now on
authorize(localStorage.getItem(TOKEN_KEY))

// global api interceptors can reduce boilerplate
// we can use them to centralize the loader bar logic
// and to show common notifications on server errors
api.interceptors.request.use(config => {
  store.dispatch(showLoading())
  return config
})

api.interceptors.response.use(
  response => {
    store.dispatch(hideLoading())
    return response
  },
  error => {
    store.dispatch(hideLoading())
    if (error.response.status === 400) {
      store.dispatch(formErrors(error.response.data))
    }
    return Promise.reject(error)
  }
)

export default api
export { authorize, unauthorize }
