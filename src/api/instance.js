import axios from 'axios'

const http = url => {
  const instance = axios.create({
    baseURL: url
  })

  instance.interceptors.request.use(
    config => {
      // console.log('axios request config', config)
      return config
    },
    err => Promise.reject(err)
  )

  instance.interceptors.response.use(
    response => {
      // console.log('axios response', response)
      return response
    },
    err => Promise.reject(err)
  )
  return instance
}
export default http
