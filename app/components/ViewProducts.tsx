import React from 'react'
import { productImage } from '../interfaces/product'
import Image from 'next/image'

interface Props {
  imageUrls: productImage[]
}

export const ViewProducts = ({imageUrls}: Props) => {

  console.log(imageUrls)

  return (
    <div className='grid md:grid-cols-3 justify-center items-center place-items-center gap-4 mb-10'>

      {
        imageUrls.map((image) => (
          // <Image className='rounded-lg h-[300px] transition delay-100 hover:rotate-6 hover:scale-110 duration-300 hover:shadow-xl cursor-pointer' src={image.url} alt={image.id} key={image.id} width={300} height={300}/>
          <div key={image.id} className='w-[250px] h-[250px] rounded-lg text-transparent bg-center bg-cover transition delay-100 hover:rotate-6 hover:scale-110 duration-300 hover:shadow-xl cursor-pointer' style={{backgroundImage: `url(${image.url})`}} >image</div>
        ))
      }

    </div>
  )
}
