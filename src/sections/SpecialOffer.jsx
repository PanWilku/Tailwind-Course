import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'


const SpecialOffer = () => {
  return (
    <section className='flex max-lg:flex-col items-center justify-center gap-10 max-container min-w-[300px]'>

      <div className='flex-1 justify-center max-lg:order-3'>
        <img src={offer} width={773} height={687} className='object-contain w-full'></img>
      </div>

      
      <div className='lg:w-1/2 flex flex-col'>
        <div className='flex
        flex-col items-start
        justify-start max-lg:order-1'>
        <h1 className='text-4xl font-bold pb-8'><span className='text-coral-red'>Special</span> Offer</h1>
        <p className='text-slate-gray opacity-80 font-montserrat'>
          Embark on a shopping journey that redefines your experience with unbeatable deals.
          From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p><br></br>
        <p className='text-slate-gray opacity-80 font-montserrat'>
          Navigate a realm of possibilities designed to fulfill your unique desires,
           surpassing the loftiest expectations. Your journey with us is nothing short of exceptional</p>
        </div >
        <div className='flex gap-12 mt-11 max-lg:pb-10 whitespace-nowrap max-xl:order-2 max-lg:justify-center'>
        <Button label="Shop Now"
        iconURL={arrowRight}></Button>
        <Button label="Learn More"
        backgroundColor="bg-white"
        borderColor="border-slate-gray"
        textColor="text-slate-gray">
        </Button>
        </div>
      </div>



    </section>
  )
}

export default SpecialOffer