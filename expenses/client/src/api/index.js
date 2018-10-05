import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import store from '../store'
//import { getItem, AUTHORIZATION } from '../utils'

export const API = axios.create({
  baseURL: `http://localhost:3010/v1`
})

let isLoading = false

API.interceptors.request.use(config => {
  if (!isLoading) {
    store.dispatch(showLoading())
    isLoading = true
  }
  return config
})

API.interceptors.response.use(
  response => {
    store.dispatch(hideLoading())
    isLoading = false
    return response
  },
  error => {
    console.log(error)
    store.dispatch(hideLoading())
    return Promise.reject(error)
  }
)

