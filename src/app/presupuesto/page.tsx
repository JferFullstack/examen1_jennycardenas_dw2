'use client'

import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext'
import PresupuestoInput from '../../components/PresupuestoInput'
import AlertaPresupuesto from '../../components/AlertaPresupuesto'

export default function PresupuestoPage() {
  const { presupuesto, setPresupuesto } = useAppContext()
  const [nuevoPresupuesto, setNuevoPresupuesto] = useState(presupuesto)
  const [alerta, setAlerta] = useState('')

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNuevoPresupuesto(Number(e.target.value))
  }

  const manejarSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (nuevoPresupuesto <= 0) {
      setAlerta('El presupuesto debe ser mayor a cero')
      return
    }
    setPresupuesto(nuevoPresupuesto)
    setAlerta('Presupuesto actualizado correctamente')
    setTimeout(() => setAlerta(''), 3000)
  }

  return (
    <div>
      <h1>Presupuesto Mensual</h1>
      {alerta && <AlertaPresupuesto mensaje={alerta} />}
      <form onSubmit={manejarSubmit}>
        <PresupuestoInput
          valor={nuevoPresupuesto}
          onChange={manejarCambio}
        />
        <button type="submit">Actualizar Presupuesto</button>
      </form>
      <p>Presupuesto actual: ${presupuesto}</p>
    </div>
  )
}
