import React from 'react'

type PresupuestoInputProps = {
  valor: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function PresupuestoInput({ valor, onChange }: PresupuestoInputProps) {
  return (
    <input
      type="number"
      value={valor}
      onChange={onChange}
      placeholder="Ingresa tu presupuesto mensual"
      min={0}
      style={{ padding: '8px', fontSize: '16px' }}
    />
  )
}
