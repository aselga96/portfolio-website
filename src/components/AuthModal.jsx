import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function AuthModal({ onClose }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const { login, loginAttempts, isLocked } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Handle admin login with security
    const result = login(username, password)
    
    if (result.success) {
      setUsername('')
      setPassword('')
      onClose()
    } else {
      setError(result.error)
      // Clear password field on error
      setPassword('')
    }

    setIsLoading(false)
  }

  const handleClose = () => {
    if (!isLoading) {
      setUsername('')
      setPassword('')
      setError('')
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md border border-slate-600">
        <h2 className="text-xl font-bold text-slate-100 mb-4">Admin Login</h2>
        
        {isLocked && (
          <div className="mb-4 p-3 bg-orange-600/20 border border-orange-600 rounded-lg">
            <p className="text-orange-400 text-sm">
              Account temporarily locked due to too many failed attempts. Please try again in 30 minutes.
            </p>
          </div>
        )}
        
        {error && !isLocked && (
          <div className="mb-4 p-3 bg-red-600/20 border border-red-600 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-royal-500 disabled:opacity-50"
              placeholder="Enter admin username"
              autoFocus
              required
              disabled={isLoading || isLocked}
              autoComplete="username"
            />
          </div>

          <div className="mb-4">
            <label className="block text-slate-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:border-royal-500 disabled:opacity-50"
              placeholder="Enter admin password"
              required
              disabled={isLoading || isLocked}
              autoComplete="current-password"
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="submit"
              disabled={isLoading || isLocked}
              className="flex-1 bg-royal-600 hover:bg-royal-700 disabled:bg-royal-800 disabled:cursor-not-allowed text-slate-100 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              {isLoading ? 'Authenticating...' : 'Login'}
            </button>
            <button
              type="button"
              onClick={handleClose}
              disabled={isLoading}
              className="flex-1 bg-slate-600 hover:bg-slate-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-100 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-slate-500 text-xs">
            Admin access required for content management
          </p>
          {loginAttempts > 0 && !isLocked && (
            <p className="text-slate-500 text-xs mt-1">
              Security: {5 - loginAttempts} attempts remaining
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
