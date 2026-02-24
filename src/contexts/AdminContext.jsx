import React, { createContext, useState, useContext } from 'react'

const AdminContext = createContext()

export function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [username, setUsername] = useState('')
  const [adminPassword, setAdminPassword] = useState('admin123') // Simple password for demo

  const login = (username, password) => {
    // Simple authentication - in production, this would be a real API call
    if (username === 'admin' && password === adminPassword) {
      setIsAdmin(true)
      setUsername(username)
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    setUsername('')
  }

  return (
    <AdminContext.Provider value={{ isAdmin, username, login, logout }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
