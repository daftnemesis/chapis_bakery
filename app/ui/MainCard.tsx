import Image from 'next/image'
import React from 'react'

type Props = {
  title: string
  body: string
}

const MainCard = ({title, body}: Props) => {
  return (
    <div className='flex flex-col items-center w-3/4 border border-slate-200 rounded-lg shadow-md'>
      <Image className='rounded-t-lg' src='https://dummyimage.com/300x300/fc7efc/ffea8c.png' alt='imagen' width={300} height={300} />
      <div className='px-2 flex flex-col gap-2 text-center my-2 md:gap-6'>
        <h3 className='text-2xl font-bold text-pink-200'>{ title }</h3>
        <p className='text-xl'>{ body }</p>
        <button className="text-purple-500-500 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-lg text-xl px-5 py-2.5 text-center mr-2 mb-2">Ver mas</button>
      </div>
    </div>
  )
}

export default MainCard