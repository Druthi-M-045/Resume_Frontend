import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 60000,
})

// Add a request interceptor to include the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('rfd_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export const login = async (username, password) => {
  const params = new URLSearchParams()
  params.append('username', username)
  params.append('password', password)
  const res = await api.post('/login', params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
  return res.data
}

export const signup = async (username, password) => {
  const res = await api.post('/signup', { username, password })
  return res.data
}

export const analyzeResume = (file) => {
  const form = new FormData()
  form.append('file', file)
  return api.post('/analyze', form, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export default api
