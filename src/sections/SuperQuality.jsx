import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
  <section>
    <div className='flex flex-row max-lg:flex-col justify-center items-center min-w-[300px]'>

        <div className='lg:w-1/2 flex 
      flex-col items-start max-xl:padding-x
      justify-start'>
        <h1 className='text-4xl font-bold pb-8'>We provide You <span className='text-coral-red'>Super Quality</span> Shoes</h1>
        <p className='text-slate-gray opacity-80 font-montserrat'>Ensuring premium comfort and style, our meticulously crafted footwear is designed
          to elevate your experiece, providing you with unmatched quality, innovation, and
          a touch of elegance.
        </p>
        <p className='text-slate-gray opacity-80 font-montserrat'>Our dedication to detail and excellence ensures your satisfaction.</p>
        <div className='mt-11 max-lg:pb-24'>
        <Button label="View details"></Button>
        </div>
        </div >

        <div>
          <img src={shoe8} alt='shoe8'></img>
        </div>


      </div>
    </section>

  )
}

export default SuperQuality