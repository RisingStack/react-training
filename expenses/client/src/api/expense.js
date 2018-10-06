import api from './api'

export async function get() {
  const { data } = await api.get('/expenses')
  return data
}

export async function list(params) {
  const { data } = await api.get('/expenses', { params })
  return data
}
