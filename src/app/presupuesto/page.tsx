'use client'

import { useAppContext } from '@/context/AppContext'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const { usuario, presupuesto, gastos, cargarGastos } = useAppContext()
  const router = useRouter()

  useEffect(() => {
    if (!usuario) {
      router.push('/login') // Redirige si no está logueado
    }
  }, [usuario, router])

  useEffect(() => {
    cargarGastos()
  }, [])

  // Calcular total gastado
  const totalGastado = gastos.reduce((acc, gasto) => acc + Number(gasto.monto), 0)

  // Porcentaje usado
  const porcentaje = presupuesto > 0 ? (totalGastado / presupuesto) * 100 : 0

  let mensaje = ''
  let color = ''

  if (porcentaje >= 100) {
    mensaje = 'Has superado el límite del presupuesto, debes ajustar gastos'
    color = 'red'
  } else if (porcentaje >= 80) {
    mensaje = 'Has alcanzado el 80% del presupuesto'
    color = 'yellow'
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Panel de Gastos</h1>
      <p><strong>Usuario:</strong> {usuario}</p>
      <p><strong>Presupuesto:</strong> L. {presupuesto}</p>
      <p><strong>Total Gastado:</strong> L. {totalGastado}</p>

      {mensaje && (
        <p style={{ color }}>{mensaje}</p>
      )}

      <hr />

      <h2>Lista de Gastos</h2>
      {gastos.length === 0 ? (
        <p>No hay gastos registrados aún.</p>
      ) : (
        <ul>
          {gastos.map((gasto, i) => (
            <li key={i}>
              <strong>{gasto.categoria}</strong> - L. {gasto.monto} - {gasto.fecha}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
