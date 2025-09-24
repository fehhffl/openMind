import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import '../styles/Login.css'

function Login() {
  const [userType, setUserType] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userType) {
      setError('Por favor, selecione se você é Paciente ou Psicólogo')
      return
    }

    if (!email || !password) {
      setError('Por favor, preencha todos os campos')
      return
    }

    const success = login(email, password, userType)
    if (success) {
      navigate('/')
    } else {
      setError('Email ou senha inválidos')
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>PsicoConnect</h1>
          <p>Conectando psicólogos estagiários e pacientes</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="user-type-selection">
            <h3>Eu sou:</h3>
            <div className="user-type-buttons">
              <button
                type="button"
                className={`type-btn ${userType === 'paciente' ? 'active' : ''}`}
                onClick={() => setUserType('paciente')}
              >
                <span className="icon">🙋‍♂️</span>
                Paciente
              </button>
              <button
                type="button"
                className={`type-btn ${userType === 'psicologo' ? 'active' : ''}`}
                onClick={() => setUserType('psicologo')}
              >
                <span className="icon">🧠</span>
                Psicólogo
              </button>
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">
            Entrar
          </button>
        </form>

        <div className="login-footer">
          <p className="demo-info">
            🔒 Para demonstração, use:<br/>
            <strong>Paciente:</strong> paciente@demo.com / senha123<br/>
            <strong>Psicólogo:</strong> psicologo@demo.com / senha123
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login