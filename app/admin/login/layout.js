import '../../globals.css'
import { Inter } from 'next/font/google'

import UserProvider from '../../user-provider'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Proveedores Admin',
  description: 'Sistema de gestion de proveedores',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
