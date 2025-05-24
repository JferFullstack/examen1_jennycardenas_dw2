import React from 'react'

type AlertaPresupuestoProps = {
  mensaje: string
}

export default function AlertaPresupuesto({ mensaje }: AlertaPresupuestoProps) {
  return (
    <div style={{ color: 'red', marginBottom: '10px' }}>
      {mensaje}
    </div>
  )
}
