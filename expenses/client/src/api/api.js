import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { formErrors } from '../actions/utils'
import store from '../store'

const TOKEN_KEY = 'JWT_TOKEN'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000
})

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

authorize(localStorage.getItem(TOKEN_KEY))

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
