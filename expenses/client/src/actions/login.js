import { loginUser } from '../api/login'
import { storeItem, AUTHORIZATION } from '../utils'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginUserAction = (email, password) => {
  return async dispatch => {
    dispatch({ type: LOGIN_PENDING })

    try {
      const payload = await loginUser(email, password)
      storeItem(AUTHORIZATION, payload.data.token)
      dispatch({ type: LOGIN_SUCCESS, payload: payload.data })
      return true
    } catch (err) {
      dispatch({ type: LOGIN_ERROR, payload: err.response })
      return false
    }
  }
}
