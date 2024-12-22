import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className='min-w-[300px]'>
      
      <h1 className='text-4xl font-bold pb-8 text-center'> Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter</h1>
      <div className='flex justify-center max-sm:flex-col gap-4'>
        <div className='flex border border-slate-gray border-opacity-50 rounded-full p-4 flex-grow max-w-screen-sm'>
          <input type='text' placeholder='subscribe@nike.com' className='flex-grow rounded-full focus:outline-none'></input>
        </div>

        <div className='flex justify-center sm:justify-start'>
          <Button
            label="Sign Up"
            textColor="text-white"
            backgroundColor="bg-coral-red"
            ></Button>
        </div>
      </div>

    </section>
  )
}

export default Subscribe