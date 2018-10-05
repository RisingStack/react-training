export const AUTHORIZATION = 'authorization'


export const storeItem = (key, item) => {
  localStorage.setItem(key, item)
}

export const getItem = key => {
  return localStorage.getItem(key)
}

export const deleteItem = key => {
  localStorage.removeItem(key)
}

export const getToken = () => {
  const token = getItem(AUTHORIZATION)

  return 'Bearer ' + token

}