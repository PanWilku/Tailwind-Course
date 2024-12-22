import React from 'react'
import { reviews } from '../assets/constants'
import { star } from '../assets/icons'

const CustomerCard = ({imgURL, customerFeedback, customerName, customerRating}) => {
  return (
    <div className='flex justify-center items-center flex-col
    text-center min-w-[300px] w-1/3 gap-2 p-4'>
        <img src={imgURL}
        alt='customer-picture'
        className='rounded-full object-cover w-[120px] h-[120px]'></img>
        <p className='max-w-[300px] text-slate-gray opacity-80 font-montserrat break-words leading-7'>{customerFeedback}</p>
        <div className='flex gap-2'>
            <img src={star} width={20}/>
            <p>({customerRating})</p>
        </div>
        <p className='text-2xl text-bold font-montserrat'>{customerName}</p>

  </div>
  )
}

export default CustomerCard