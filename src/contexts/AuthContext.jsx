import React, { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

const mockUsers = {
  'paciente@demo.com': {
    password: 'senha123',
    type: 'paciente',
    name: 'João Silva',
    email: 'paciente@demo.com'
  },
  'psicologo@demo.com': {
    password: 'senha123',
    type: 'psicologo',
    name: 'Dra. Ana Santos',
    email: 'psicologo@demo.com',
    crp: 'CRP 01/12345'
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password, userType) => {
    const mockUser = mockUsers[email]

    if (mockUser && mockUser.password === password && mockUser.type === userType) {
      const userData = {
        email: mockUser.email,
        name: mockUser.name,
        type: mockUser.type,
        crp: mockUser.crp
      }
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return true
    }
    return false
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}