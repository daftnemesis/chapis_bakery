import { Dancing_Script, Josefin_Sans } from 'next/font/google';
import { MainCard } from './ui';
import Facebook from '../public/facebook.svg'
import Whatsapp from '../public/whatsapp.svg'
import Image from 'next/image';
import Link from 'next/link';

const dancing_script = Dancing_Script({
  weight: '400',
  subsets: ['latin']

})

const josefin = Josefin_Sans({
  weight: '400',
  subsets: ['latin']
})

// function isMobileDevice() {
//   const userAgent = typeof window.navigator === "undefined" ? "" : window.navigator.userAgent;
//   const mobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
//   return mobile;
// }


export default function Home() {

  return (
    <>
      <div className={`mt-4 md:mt-[100px] text-pink-700 text-center md:h-96 md:flex md:flex-col md:items-center md:justify-center bg-rose-200 rounded-md gap-2 py-4 shadow-lg charlie ${josefin.className}`}>
        <h2 className={`${dancing_script.className} text-2xl md:text-5xl`}>Bienvenidos a Chapis Delights and Piñatas </h2>
        <div className='max-w-2xl md:text-left italic flex flex-col gap-2 px-4'>
          <p className='md:text-xl'>
            Donde encontraras todo lo necesario para celebrar de manera dulce y divertida la fiesta de tus sueños. 
          </p>
          <p className='md:text-xl'>
          Endulza tus momentos especiales con nuestros deliciosos postres, sorprende a tus invitados con nuestras coloridas piñatas y descubre la frescura y sabor de nuestras gelatinas y postres.
          </p> 
        </div>
      </div>

      <div className='w-full h-40 md:mt-[100px] mt-4 flex items-center justify-center'>
        <h4 className={`text-3xl md:text-6xl text-pink-700 shadow-lg rounded-full px-4 ${dancing_script.className}`}>Conoce nuestros productos:</h4>
      </div>

      <div className='flex flex-col md:flex-row mt-4 md:mt-[100px] gap-4 items-center md:items-stretch'>
        <MainCard title='Piñatas' body='¡Decora tu fiesta con nuestras coloridas y hermosas piñatas!' src='https://i.ibb.co/nr54Bky/My-project-1-1.png' />
        <MainCard title='Reposteria' body='¡Endulza tu vida con nuestros deliciosos postres!' src='https://i.ibb.co/Y749DNj/Imagen-de-Whats-App-2023-04-10-a-las-22-58-32.jpg' />
        <MainCard title='Gelatinas' body='¡Siente la diferencia de las gelatinas hechas a mano!' src='https://i.ibb.co/2ZTdM8n/My-project-1-2.png' />
      </div>

      <div className='w-auto md:w-full md:mt-[150px] mt-12 flex items-center justify-center wiggle rounded-lg shadow-lg px-4 py-6 md:rotate-6 mb-40 z-0'>
        <p className={`text-center text-2xl text-pink-500 ${josefin.className}`}>
          ¡Celebra la vida con nuestras piñatas, gelatinas y repostería! Nuestros productos artesanales son el complemento perfecto para cualquier fiesta u ocasión especial. 
          Con ingredientes frescos y de alta calidad, nuestros expertos en piñatas, gelatinas y repostería crean productos únicos y deliciosos que seguro dejarán a todos con un dulce sabor de boca. 
          Ven a visitarnos y descubre por ti mismo por qué somos la opción preferida de los amantes del dulce.
        </p>
      </div>

      <div className='bg-orange-300 w-full rounded-lg text-center p-4'>
        <h3 className={`text-pink-700 text-xl ${josefin.className}`}>Ponte en contacto con nosotros:</h3>
        <div className='flex items-center justify-center gap-4'>

          <Link href='https://www.facebook.com/profile.php?id=100088483476575' target='_blank'>
            <Image className='w-20 p-2 bg-white rounded-full' src={Facebook} alt='facebook logo' />
          </Link>

          <Link href='https://api.whatsapp.com/send?phone=524741057477'>
            <Image className='w-20 h-20 p-2 bg-white rounded-full' src={Whatsapp} alt='facebook logo' />
          </Link>
        </div>
        <h6 className='text-sm text-gray-500 mt-2'>Pagina creada por Daftnemesis para mi morsito con mucho <span role="img" aria-label="heart">❤️</span> </h6>
      </div>
    </>
  )
}
