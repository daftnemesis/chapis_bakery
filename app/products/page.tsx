"use client"


import React, { MouseEventHandler } from 'react'
import { useState } from 'react';
import { productUrls } from '../utils/productsImages';
import { ViewProducts } from '../components/ViewProducts';


const AboutPage = () => {

  const [viewProduct, setViewProduct] = useState(0)

  const handleClick = ( view: number ) => {
    setViewProduct(view)
  }

  const urls = productUrls(viewProduct)


  return (

      <div className='text-center'>

        <div className='flex flex-col md:flex-row items-center justify-center my-20 gap-5'>
          <button onClick={() => handleClick(1)} className='w-2/3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200'>
            <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-yellow-50 rounded-md group-hover:bg-opacity-0'>
              Ver Piñatas
            </span>
          </button>

          <button onClick={() => handleClick(2)} className='w-2/3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200'>
            <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-yellow-50 rounded-md group-hover:bg-opacity-0'>
              Ver Gelatinas
            </span>
          </button>

          <button onClick={() => handleClick(3)} className='w-2/3 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 focus:ring-4 focus:outline-none focus:ring-red-100'>
            <span className='w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-yellow-50 rounded-md group-hover:bg-opacity-0'>
              Ver Reposteria
            </span>
          </button>
        </div>

        <ViewProducts imageUrls={urls} />

      </div>
  )
}

export default AboutPage