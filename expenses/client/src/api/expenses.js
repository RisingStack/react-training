import api from './api'

export async function get(id) {
  const { data } = await api.get(`/expenses/${id}`)
  return data
}

export async function list(params) {
  const { data } = await api.get('/expenses', { params })
  return data
}
