import { Lato } from 'next/font/google'


import './globals.css'
import 'animate.css'
import Navbar from './ui/Navbar'
import { Footer } from './ui/Footer'

const lato = Lato({
  subsets: ['latin'],
  weight: '400'
})



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en" className={lato.className}>
      <body className='p-2 max-w-4xl mx-auto bg-yellow-50'>

        <Navbar />

        { children }

        <Footer />
        
      </body>
    </html>
  )
}
