import React from 'react'
import { star } from '../assets/icons'

const ShoeProduct = ({shoe}) => {
  return (
    <div className="flex flex-col gap-1">
        <img className='md:max-w-full max-md:max-w-52' src={shoe.imgURL} alt='shoe-product'></img>
        <div className='flex items-center gap-2'>
            <img src={star} width={20} height={20} className='mt-2 mb-2'></img>
            <p className='font-montserrat text-slate-gray'>(4.5)</p>
        </div>

        <p className='font-bold'>{shoe.name}</p>
        <p className='text-orange-600 font-bold'>{shoe.price}</p>

    </div>
  )
}

export default ShoeProduct