import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { useState } from 'react'
import ShoeCard from '../components/ShoeCard'
import { statistics } from '../assets/constants'


const Hero = () => {


  return (
    
    <section
    id='home'
    className='w-full
    flex flex-col lg:flex-row
    min-h-screen xl:justify-center
    max-container'>

      {/* w-full sets the width of the div to 100% by default, unless overridden (e.g., by xl:w-2/5). */}
      <div className='relative xl:w-2/5 flex 
      flex-col items-start w-full max-xl:padding-x
      justify-start pt-64 border-2 border-red-400'>
        <p className='text-2xl text-orange-400 pb-8 pt-10'>Our Summer collections</p>
        <h1 className='text-8xl font-bold pb-4
        xl:whitespace-nowrap bg-white relative z-10 pr-10'><span className=''>The New Arrival</span>
        <br />
        <span className='text-8xl text-orange-600'>Nike</span> Shoes
        </h1>
        <p className='text-slate-gray opacity-80 leading-8 max-w-xs pb-8'>Discover stylish Nike arrivals, quality comfort, add innovation for your active life.</p>
        <Button label="Shop now"
        iconURL={arrowRight}>

        </Button>
        <div className='flex flex-row max-sm:flex-col'>
          {statistics.map((item) => (
            <div key={item.label} className='sm:pr-16 sm:mt-10 max-sm:py-5'>
              <p className='leading-tight font-bold text-4xl font-montserrat'>{item.value}</p>
              <p className='leading-tight font-montserrat font-light'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className='w-full  border-2 border-green-400'>




      </div>

    </section>
  )
}

export default Hero