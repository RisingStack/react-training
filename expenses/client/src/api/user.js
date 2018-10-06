import api, { authorize, unauthorize } from './api'

export async function login(body) {
  const { data } = await api.post('/login', body)
  authorize(data.token)
  return data.user
}

export async function register(body) {
  const { data } = await api.post('/register', body)
  authorize(data.token)
  return data.user
}

export function logout() {
  unauthorize()
}
