import axios from 'axios'
axios.timeout =600000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://10.112.124.114:8089"
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) { 
  return response .data
}, function (error) {
  return Promise.reject(error) 
})
 export {axios}