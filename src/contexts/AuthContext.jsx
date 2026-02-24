import { createContext, useContext, useState, useEffect } from 'react'
import { verifyCredentials } from '../utils/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loginAttempts, setLoginAttempts] = useState(0)
  const [isLocked, setIsLocked] = useState(false)

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('adminUser')
    const sessionExpiry = localStorage.getItem('sessionExpiry')
    
    if (savedUser && sessionExpiry) {
      const userData = JSON.parse(savedUser)
      const expiryTime = parseInt(sessionExpiry)
      
      // Check if session is still valid (24 hours)
      if (Date.now() < expiryTime) {
        setUser(userData)
        setIsAuthenticated(true)
      } else {
        // Clear expired session
        logout()
      }
    }
  }, [])

  // Lock account after too many failed attempts
  useEffect(() => {
    if (loginAttempts >= 5) {
      setIsLocked(true)
      // Lock for 30 minutes
      setTimeout(() => {
        setIsLocked(false)
        setLoginAttempts(0)
      }, 30 * 60 * 1000)
    }
  }, [loginAttempts])

  const login = (username, password) => {
    // Prevent login if account is locked
    if (isLocked) {
      return { success: false, error: 'Account temporarily locked due to too many failed attempts' }
    }

    // Verify credentials securely
    if (verifyCredentials(username, password)) {
      const userSession = {
        id: 1,
        username: 'aselga',
        email: 'admin@example.com',
        name: 'Alexander Selga',
        role: 'admin',
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        sessionId: Math.random().toString(36).substring(2, 15),
        preferences: {
          theme: 'dark',
          notifications: true
        }
      }
      
      setUser(userSession)
      setIsAuthenticated(true)
      setLoginAttempts(0)
      
      // Store session with expiry (24 hours)
      localStorage.setItem('adminUser', JSON.stringify(userSession))
      localStorage.setItem('sessionExpiry', (Date.now() + 24 * 60 * 60 * 1000).toString())
      
      return { success: true, user: userSession }
    }
    
    // Increment failed attempts
    setLoginAttempts(prev => prev + 1)
    const remainingAttempts = 5 - loginAttempts - 1
    
    return { 
      success: false, 
      error: remainingAttempts > 0 
        ? `Invalid credentials. ${remainingAttempts} attempts remaining.` 
        : 'Too many failed attempts. Account locked for 30 minutes.'
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    setLoginAttempts(0)
    localStorage.removeItem('adminUser')
    localStorage.removeItem('sessionExpiry')
  }

  const updateUserPreferences = (preferences) => {
    if (user) {
      const updatedUser = { ...user, preferences: { ...user.preferences, ...preferences } }
      setUser(updatedUser)
      localStorage.setItem('adminUser', JSON.stringify(updatedUser))
    }
  }

  const isAdmin = () => {
    return user?.role === 'admin'
  }

  const refreshSession = () => {
    if (isAuthenticated && user) {
      localStorage.setItem('sessionExpiry', (Date.now() + 24 * 60 * 60 * 1000).toString())
      return true
    }
    return false
  }

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    updateUserPreferences,
    isAdmin,
    refreshSession,
    loginAttempts,
    isLocked
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
