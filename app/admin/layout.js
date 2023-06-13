
import '../globals.css'
import { Inter } from 'next/font/google'
//import { createContext, useState } from 'react';
//import UserProvider from '../user-provider';
//export const UserContext = createContext();
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Proveedores Admin',
  description: 'Sistema de gestion de proveedores',
}

export default function RootLayout({ children }) {
  const [user,setUser]=useState('test')

  return (
    <UserContext.Provider value={[user,setUser]}>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
    </UserContext.Provider>
  )
}
