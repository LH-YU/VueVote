import axios from 'axios'
axios.timeout =600000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://47.103.194.64:8089"
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