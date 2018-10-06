import * as userApi from '../api/user'

export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'
export const LOGOUT = 'LOGOUT'

export function login(data) {
  return async dispatch => {
    const user = await userApi.login(data)
    dispatch({ type: LOGIN, user })
  }
}

export function register(data) {
  return async dispatch => {
    const user = await userApi.register(data)
    dispatch({ type: REGISTER, user })
  }
}

export function logout() {
  userApi.logout()
  return { type: LOGOUT }
}
