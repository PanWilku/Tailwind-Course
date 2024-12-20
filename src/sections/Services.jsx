import React from 'react'
import { shieldTick, support, truckFast } from '../assets/icons'

const Services = () => {
  return (
    <section>
      <div className='flex gap-48'>
        <div className='flex flex-col flex-grow border-2 border-coral-red'>
          <img src={truckFast}></img>
          <h1>Free Shipping</h1>
          <p>Enjoy seamless shopping wth our complimentary shipping service.</p>
        </div>
        <div className='flex flex-col border-2 flex-grow border-yellow-200'>
          <img src={shieldTick}></img>
          <h1>Secure Payment</h1>
          <p>Experience worry free transactions with our secure payment options</p>
        </div>
        <div className='flex flex-col border-2 flex-grow border-violet-300'>
          <div className='flex justify-center items-center'>
            <img src={support} width={80}className='bg-coral-red rounded-full'></img>
          </div>
          <h1>Love to help you</h1>
          <p className='text-balance'>Our dedicated Team is here to assist you every step of the way</p>
        </div>
      </div>
    </section>
  )
}

export default Services