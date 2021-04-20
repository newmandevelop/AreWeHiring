import axios from './axiosConfig'

export const login = (loginData: any) => {
  return axios()
    .get('/login')
    .then(response => {
      if (response && response.data) {
        const responseData = response.data
        const loginExist = responseData.find(
          (item: any) =>
            item.email === loginData.email &&
            item.password === loginData.password,
        )
        console.log('loginExit', loginExist)
        return loginExist
      }
    })
    .catch(error => {
      throw error.response
    })
}
