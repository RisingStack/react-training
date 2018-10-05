import { registerUser } from '../api/register'
import { LOGIN_SUCCESS } from './login'
import { storeItem, AUTHORIZATION } from '../utils'

export const REGISTER_PENDING = 'REGISTER_PENDING'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const registerUserAction = (email, password, name) => {
  return async dispatch => {
    dispatch({ type: REGISTER_PENDING })

    try {
      const payload = await registerUser(email, password, name)
      storeItem(AUTHORIZATION, payload.data.token)
      dispatch({ type: REGISTER_SUCCESS, payload: payload.data })
      dispatch({ type: LOGIN_SUCCESS, payload: payload.data })

      return payload
    } catch (err) {
      dispatch({ type: REGISTER_ERROR, payload: err.response })
    }
  }
}
