import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../services/api'

export default function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (!name || !email || !password) return setError('Please fill all fields')
    if (password !== confirm) return setError('Passwords do not match')

    try {
      await signup(email, password) // Using email as username for backend
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.detail || 'Signup failed. Username might already exist.')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md card">
        <h2 className="text-2xl font-semibold mb-2">Create an account</h2>
        <p className="text-sm text-gray-500 mb-6">Start detecting fraudulent resumes</p>
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">Name</label>
            <input value={name} onChange={e => setName(e.target.value)} className="mt-1 w-full p-2 border rounded-lg" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full p-2 border rounded-lg" type="email" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full p-2 border rounded-lg" type="password" />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Confirm Password</label>
            <input value={confirm} onChange={e => setConfirm(e.target.value)} className="mt-1 w-full p-2 border rounded-lg" type="password" />
          </div>
          <button className="w-full bg-gradient-to-r from-primary to-accent text-white py-2 rounded-lg">Sign up</button>
        </form>
        <p className="mt-4 text-sm text-gray-600">Already have an account? <Link to="/login" className="text-primary">Login</Link></p>
      </div>
    </div>
  )
}
