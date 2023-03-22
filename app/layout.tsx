import { Lato } from 'next/font/google'


import './globals.css'
import 'animate.css'
import Navbar from './ui/Navbar'

const lato = Lato({
  subsets: ['latin'],
  weight: '700'
})



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" className={lato.className}>
      <body>

        <Navbar />

        {children}
        
      </body>
    </html>
  )
}
