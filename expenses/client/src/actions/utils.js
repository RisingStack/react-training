export const FORM_ERRORS = 'FORM_ERRORS'
export const INIT_PAGE = 'INIT_PAGE'

export function formErrors(errors) {
  return { type: FORM_ERRORS, errors }
}

export function initPage() {
  return { type: INIT_PAGE }
}
