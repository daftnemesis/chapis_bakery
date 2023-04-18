import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
  body: string
  src: string
}

const MainCard = ({title, body, src}: Props) => {
  return (
    <div className='flex flex-col w-3/4 border border-slate-200 rounded-lg shadow-lg'>
      <Image className='rounded-t-lg h-[300px] transition delay-100 hover:rotate-6 hover:scale-110 duration-300 hover:rounded-b-lg hover:shadow-xl cursor-pointer' src={src} alt='imagen' width={300} height={300} />
      <div className='px-2 flex flex-col gap-2 text-center my-2 md:gap-6'>
        <h3 className='text-2xl font-bold text-pink-200'>{ title }</h3>
        <p className='text-xl'>{ body }</p>
        <button className="text-purple-500-500 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">Ver mas</button>
      </div>
    </div>
  )
}

export default MainCard