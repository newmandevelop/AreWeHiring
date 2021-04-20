import axios, { AxiosInstance } from 'axios'

const createAxiosInstance = (): AxiosInstance => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_MOCK_URL,
    timeout: 12000,
  })
  instance.interceptors.request.use(
    config => {
      // config.headers.Authorization = ''
      return { ...config }
    },
    error => {
      return Promise.reject(error)
    },
  )
  return instance
}

export default createAxiosInstance
