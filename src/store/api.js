import axios from 'axios'
import qs from 'query-string'

const API_URL = process.env.REACT_APP_API_URL
const AUTH_HEADER = process.env.REACT_APP_AUTH_HEADER

export const createUrl = (route, prms = null) => {
  const params = prms ? `?${qs.stringify(prms)}` : ''
  return decodeURIComponent(`${API_URL}${route}${params}`)
}

export const authHeader = () => ({
  [AUTH_HEADER]: localStorage.getItem('token'),
})

export const apiGet = (route, options = {}) => {
  const { params, headers = {}, secure = false } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'get', url, headers,
  })
}

export const apiPost = (route, options = {}) => {
  const {
    params, headers = {}, secure = false, data,
  } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'post', url, headers, data,
  })
}

export const apiPut = (route, options = {}) => {
  const {
    params, headers = {}, secure = false, data,
  } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'put', url, headers, data,
  })
}

export const apiDelete = (route, options = {}) => {
  const {
    params, headers = {}, secure = false, data,
  } = options
  const url = createUrl(route, params)

  if (secure) Object.assign(headers, authHeader())

  return axios({
    method: 'delete', url, headers, data,
  })
}
