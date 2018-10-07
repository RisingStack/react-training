import { FORM_ERRORS } from '../actions/utils'

export function formErrors(state = {}, { type, errors }) {
  switch (type) {
    case FORM_ERRORS:
      return errors
    default:
      return state
  }
}
