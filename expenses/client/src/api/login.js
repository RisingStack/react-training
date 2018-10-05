import { API } from './index'

export const loginUser = (email, password) => {
  return API.post(`/login`, {
    email,
    password
  })
}