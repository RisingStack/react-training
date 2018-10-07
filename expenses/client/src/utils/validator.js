const Ajv = require('ajv')
const addCustomErrors = require('ajv-errors')

// do not stop at the first error, the user needs to know about all issues
const validator = new Ajv({
  allErrors: true,
  coerceTypes: true,
  useDefaults: true,
  // see dataPath section here: https://github.com/epoberezkin/ajv#error-objects
  jsonPointers: true
})
// this extends the jsonSchema spec to allow custom errors in the 'errorMessage' prop
addCustomErrors(validator)

function validate(schema, data) {
  const isValid = validator.validate(schema, data)
  return isValid ? {} : parseErrors(validator.errors)
}

function parseErrors(errors) {
  const result = {}
  for (const error of errors) {
    const propName = error.dataPath.split('/').pop()
    result[propName] = `${error.message}`
  }
  return result
}

module.exports = {
  validate
}
