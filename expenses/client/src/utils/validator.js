import Ajv from 'ajv'

const validator = new Ajv({
  allErrors: true,
  coerceTypes: true,
  useDefaults: true,
  jsonPointers: true
})

export default function validate (schema, data) {
  const isValid = validator.validate(schema, data)
  if (!isValid) {
    const msg = {
      error: validator.errors[0].message
    } 
    return msg
    
  }
  return data
}


