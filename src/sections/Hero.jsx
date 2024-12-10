import React from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../assets/constants'

const Hero = () => {
  console.log(typeof arrowRight)
  return (
    
    <section
    id='home'
    className='w-full
    flex flex-col xl:flex-row
    justify-center min-h-screen
    gap-10 max-container border-2 border-red-400'>

      {/* w-full sets the width of the div to 100% by default, unless overridden (e.g., by xl:w-2/5). */}
      <div className='xl:w-2/5 flex 
      flex-col items-start w-full max-xl:padding-x pt-28
      border-2 border-green-200'>
        <p>Our Summer collections</p>
        <h1><span>The New Arrival</span>
        <br />
        <span>Nike</span> Shoes
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, add innovation for your active life.</p>
        <Button label="Shop now"
        iconURL={arrowRight}>

        </Button>
        <div className='flex flex-row max-sm:flex-col
         border-4 border-red-500'>
          {statistics.map((item) => (
            <div className='sm:pr-16 sm:mt-10 max-sm:py-5'>
              <p className='leading-tight font-bold text-3xl font-montserrat'>{item.value}</p>
              <p className='leading-tight font-montserrat font-light'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Hero