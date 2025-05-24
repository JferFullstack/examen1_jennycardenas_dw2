'use client'

import React from 'react'

type Gasto = {
  idgasto?: number
  categoria: string
  monto: number
  fecha: string
}

interface Props {
  gastos: Gasto[]
}

export default function GastoLista({ gastos }: Props) {
  if (gastos.length === 0) {
    return <p>No hay gastos registrados.</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Categoría</th>
          <th>Monto</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {gastos.map((gasto) => (
          <tr key={gasto.idgasto || gasto.fecha + gasto.categoria}>
            <td>{gasto.categoria}</td>
            <td>{gasto.monto.toFixed(2)}</td>
            <td>{gasto.fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
