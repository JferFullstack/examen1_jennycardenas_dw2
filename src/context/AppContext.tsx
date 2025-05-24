'use client'

import React, { createContext, useState, useContext, useEffect } from 'react'

type Gasto = {
  idgasto?: number
  categoria: string
  monto: number
  fecha: string
}

const AppContext = createContext<any>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<string | null>(null)
  const [presupuesto, setPresupuesto] = useState<number>(0)
  const [gastos, setGastos] = useState<Gasto[]>([])

  const agregarGasto = (nuevoGasto: Gasto) => {
    setGastos([...gastos, nuevoGasto])
  }

  const cargarGastos = async () => {
    try {
      const respuesta = await fetch('http://localhost:5000/gasto')
      const datos = await respuesta.json()
      setGastos(datos)
    } catch (error) {
      console.log('Error al cargar los gastos:', error)
    }
  }

  useEffect(() => {
    if (usuario) {
      cargarGastos()
    }
  }, [usuario])

  return (
    <AppContext.Provider value={{
      usuario,
      setUsuario,
      presupuesto,
      setPresupuesto,
      gastos,
      agregarGasto,
      cargarGastos
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
