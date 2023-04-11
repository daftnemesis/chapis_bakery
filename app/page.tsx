import { Dancing_Script, Josefin_Sans } from 'next/font/google';
import { MainCard } from './ui';

const dancing_script = Dancing_Script({
  weight: '400',
  subsets: ['latin']

})

const josefin = Josefin_Sans({
  weight: '400',
  subsets: ['latin']
})


export default function Home() {
  return (
    <>
      <div className={`mt-4 text-pink-700 text-center md:h-96 md:flex md:flex-col md:items-center md:justify-center bg-rose-200 rounded-md gap-2 py-4 md:gap-6 charlie ${josefin.className}`}>
        <h2 className={`${dancing_script.className} text-2xl md:text-5xl`}>Bienvenidos a Chapis Delights and Piñatas </h2>
        <div className='max-w-2xl md:text-left italic flex flex-col gap-2 px-4'>
          <p className='md:text-xl'>
            Donde encontraras todo lo necesario para celebrar de manera dulce y divertida la fiesta de tus sueños. 
          </p>
          <p className='md:text-xl'>
          Endulza tus momentos especiales con nuestros deliciosos postres, sorprende a tus invitados con nuestras coloridas piñatas y descubre la frescura y sabor de nuestras gelatinas.
          </p> 
        </div>
      </div>

      <div className='flex flex-col md:flex-row mt-4 gap-4 items-center'>
        <MainCard title='Piñatas' body='¡Decora tu fiesta con nuestras coloridas y hermosas piñatas!' />
        <MainCard title='Reposteria' body='¡Endulza tu vida con nuestros deliciosos postres!' />
        <MainCard title='Gelatinas' body='¡Siente la diferencia de las gelatinas hechas a mano!' />
      </div>
    </>
  )
}
