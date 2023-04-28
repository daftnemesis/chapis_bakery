"use client";


import Link from "next/link"
import {HomeIcon, ChatBubbleOvalLeftEllipsisIcon, UserCircleIcon, Bars3Icon} from '@heroicons/react/24/outline'
import { useState } from "react"
import { Dancing_Script } from 'next/font/google';

const dancing_script = Dancing_Script({
  weight: '400',
  subsets: ['latin']

})


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
    console.log(toggleMenu)
  }

  return (
    <div className='bg-pink-200 sticky top-0 rounded-md text-black z-10'>
      <nav className='bg-green-200 flex flex-wrap justify-between px-4 py-2 rounded-md'>

        <div>
          <Link href='/'>
            <h1 className={`${dancing_script.className} text-2xl`}>Chapis Delights and Piñatas</h1>
          </Link>
        </div>


        {/* Boton Menu */}
        <button className="flex items-center md:hidden" onClick={handleToggle}>
          <Bars3Icon className="h-8" />
        </button>

        {/* Navegacion */}
        <div className={`md:flex gap-2 items-center animate__animated animate__fadeInRight ${toggleMenu ? 'flex' : 'hidden'} `}>

          <div className="flex items-center gap-1">
            <HomeIcon className="h-4" />
            <Link href='/'>Home</Link>
          </div>

          <div className="flex items-center gap-1">
            <UserCircleIcon className="h-4" />
            <Link href='/about'>Productos</Link>
          </div>

          <div className="flex items-center gap-1">
            <ChatBubbleOvalLeftEllipsisIcon className="h-4" />
            <a href='#contacto'>Contacto</a>
          </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar