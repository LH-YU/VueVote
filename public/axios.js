import axios from 'axios'
axios.timeout =600000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
axios.defaults.withCredentials = true
axios.defaults.baseURL = ''
axios.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) { 
  return response 
}, function (error) {
  return Promise.reject(error) 
})
export {axios}
// 请求配置-工具类