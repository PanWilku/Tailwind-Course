import React from 'react'

const ServicesCard = ({imgURL, subtext, label}) => {
  return (
    <div className='flex flex-col justify-start rounded-[20px] shadow-xl p-4'>
        <div className='flex w-16 h-16 rounded-full justify-center items-center bg-coral-red'>
            <img src={imgURL} width={40}></img>
        </div>
        <h1 className='text-2xl font-bold pb-4 pt-4'>{label}</h1>
        <p className='text-slate-gray opacity-80 font-montserrat max-w-sm break-words'>{subtext}</p>
    </div>
  )
}

export default ServicesCard