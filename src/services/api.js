import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 60000,
})

export const analyzeResume = (file) => {
  const form = new FormData()
  form.append('file', file)
  return api.post('/analyze', form, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
}

export default api
