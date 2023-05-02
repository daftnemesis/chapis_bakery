import { Josefin_Sans } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Facebook from '../../public/facebook.svg'
import Whatsapp from '../../public/whatsapp.svg'

const josefin = Josefin_Sans({
  weight: '400',
  subsets: ['latin']
})

export const Footer = () => {
  return (
    <div className='bg-orange-300 w-full rounded-lg text-center p-4 static bottom-0 max-w-4xl mx-auto h-fit' id='contacto'>
      <h3 className={`text-pink-700 text-lg ${josefin.className}`}>Ponte en contacto con nosotros:</h3>
      <div className='flex items-center justify-center gap-4'>

        <Link href='https://www.facebook.com/profile.php?id=100088483476575' target='_blank'>
          <Image className='w-12 p-2 bg-white rounded-full' src={Facebook} alt='facebook logo' />
        </Link>

        <Link href='https://api.whatsapp.com/send?phone=524741057477' target='_blank'>
          <Image className='w-12 h-12 p-2 bg-white rounded-full' src={Whatsapp} alt='facebook logo' />
        </Link>
      </div>
      <h6 className='text-sm text-gray-500 mt-2'>Pagina creada por Daftnemesis para mi morsito con mucho <span role="img" aria-label="heart">❤️</span> </h6>
    </div>
  )
}
