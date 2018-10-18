import { FORM_ERRORS } from '../actions/utils'

// reducers should be pure functions with zero side effects

// never forget to add a default case and a default value (in the argument list)
// for reducers
export function formErrors(state = {}, { type, errors }) {
  switch (type) {
    case FORM_ERRORS:
      return errors
    default:
      return state
  }
}
