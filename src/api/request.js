import axios from 'axios'
import { useAuthStore } from '@/store/auth'
import router from '@/router'
import { ElMessage } from 'element-plus'


const service = axios.create({
  baseURL: '/',
  timeout: 5000
})

/*  Request Interceptor */
service.interceptors.request.use(
  config => {
    const authStore = useAuthStore()

    if (authStore.token) {
      config.headers.Authorization = 'Bearer ' + authStore.token
    }

    return config
  },
  error => Promise.reject(error)
)

/* Response Interceptor  */
service.interceptors.response.use(
  res => {
    return res.data
  },
  err => {
    if (err.response) {
      const status = err.response.status

      if (status === 401) {
        ElMessage.error('登录已过期，请重新登录')

        const authStore = useAuthStore()
        authStore.logout()
        router.push('/login')
      }

      else if (status === 403) {
        ElMessage.error('没有权限访问')
      }

      else if (status === 404) {
        ElMessage.error('接口不存在')
      }

      else if (status >= 500) {
        ElMessage.error('服务器错误')
      }

      else {
        ElMessage.error(err.response.data?.message || '请求失败')
      }

    } else {
      ElMessage.error('网络错误，请检查网络连接')
    }

    return Promise.reject(err)
  }
)

export default service