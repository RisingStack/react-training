import { API } from './index'

export const registerUser = (email, password, name) => {
  return API.post(`/register`, {
    email,
    password,
    name
  })
}