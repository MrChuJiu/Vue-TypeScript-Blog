import axios from 'axios'
import { userModule } from '@/store/modules/user'
const service = axios.create({
  baseURL : 'https://localhost:44323/api',
  timeout : 5000
})

//定义请求拦截器
service.interceptors.request.use(
  (config) => {
    if (true) {
      config.headers['Authorization'] = 'Bearer ' + userModule.token
    }
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

//响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response.data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)


export default service