'use client'

import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'

export default function GastoForm() {
  const { agregarGasto } = useAppContext()

  const [categoria, setCategoria] = useState('')
  const [monto, setMonto] = useState<number | ''>('')
  const [fecha, setFecha] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!categoria || !monto || !fecha) {
      alert('Por favor completa todos los campos')
      return
    }

    agregarGasto({ categoria, monto: Number(monto), fecha })

    setCategoria('')
    setMonto('')
    setFecha('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Categoria:</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Monto:</label>
        <input
          type="number"
          value={monto}
          onChange={(e) => setMonto(e.target.value === '' ? '' : Number(e.target.value))}
          required
          min="0"
          step="0.01"
        />
      </div>

      <div>
        <label>Fecha:</label>
        <input
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          required
        />
      </div>

      <button type="submit">Agregar Gasto</button>
    </form>
  )
}
