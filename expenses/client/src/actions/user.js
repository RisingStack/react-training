import * as userApi from '../api/user'

export const LOGIN = 'LOGIN'
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
    dispatch({ type: LOGIN, user })
  }
}

export function logout() {
  userApi.logout()
  return { type: LOGOUT }
}

export function getMe(data) {
  return async dispatch => {
    try {
      const user = await userApi.getMe(data)
      dispatch({ type: LOGIN, user })
    } catch (err) {
      userApi.logout()
    }
  }
}
