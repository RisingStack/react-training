import { deleteItem, AUTHORIZATION } from '../utils'

export const LOGOUT_PENDING = 'LOGOUT_PENDING'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

export const logoutUser = () => {
  return async dispatch => {
    dispatch({ type: LOGOUT_PENDING })

    try {
      deleteItem(AUTHORIZATION)

      dispatch({ type: LOGOUT_SUCCESS })
    } catch (err) {
      dispatch({ type: LOGOUT_ERROR })
    }
  }
}
