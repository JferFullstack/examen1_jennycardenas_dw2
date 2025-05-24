import { ReactNode } from 'react'
import { AppProvider } from '../context/AppContext'

export const metadata = {
  title: 'Administrador de Gastos Personales',
  description: 'App para controlar tus gastos mensuales',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  )
}
