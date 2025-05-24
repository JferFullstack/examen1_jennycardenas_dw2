'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAppContext } from '@/context/AppContext'

export default function LoginPage() {
  const router = useRouter()
  const { setUsuario } = useAppContext()

  const [usuarioInput, setUsuarioInput] = useState('')
  const [claveInput, setClaveInput] = useState('')
  const [error, setError] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    if (usuarioInput === 'admin' && claveInput === 'admin123') {
      setUsuario('admin')
      router.push('/dashboard')
    } else {
      setError('Usuario o clave incorrectos.')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Iniciar Sesión</h1>

      <form onSubmit={handleLogin}>
        <div>
          <label>Usuario:</label><br />
          <input
            type="text"
            value={usuarioInput}
            onChange={(e) => setUsuarioInput(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label><br />
          <input
            type="password"
            value={claveInput}
            onChange={(e) => setClaveInput(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Entrar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}
