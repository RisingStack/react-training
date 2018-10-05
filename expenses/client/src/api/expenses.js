import { API } from './index'
import { getToken } from '../utils'

export const getExpenses = () => {
  return API.get(`/expenses`, { headers: { Authorization: getToken() } })
}

export const getExpensesSR = (params) => {
  
  let urlString = '/expenses'
  if (params && params.hasOwnProperty('pageSize')) {
  urlString += `?limit=${params.pageSize}`
  }
  if (params && params.hasOwnProperty('title')) {
    urlString += `&title=${params.title}`
  }

  if (params && params.hasOwnProperty('sort')) {
    urlString += `&sort=${params.sort}`
  }

  if (params && params.hasOwnProperty('offset')) {
    urlString += `&offset=${params.offset}`
  }
  console.log(urlString)
  return API.get(urlString, 
  { headers: { Authorization: getToken() } })
}