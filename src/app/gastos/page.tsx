'use client'

import React, { useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import GastoForm from '../../components/GastoForm'
import GastoLista from '../../components/GastoLista'

export default function GastosPage() {
  const { gastos, cargarGastos, usuario } = useAppContext()

  useEffect(() => {
    if (usuario) {
      cargarGastos()
    }
  }, [usuario, cargarGastos])

  return (
    <div>
      <h1>Gestión de Gastos</h1>
      <GastoForm />
      <GastoLista gastos={gastos} />
    </div>
  )
}
