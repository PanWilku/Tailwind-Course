import React from 'react'
import { products } from '../assets/constants'
import ShoeProduct from '../components/ShoeProduct'

const PopularProducts = () => {
  return (
    <section id='products'>
    <div className='flex flex-col border-2 border-yellow-200 min-w-[300px]'>
      <h1 className="text-4xl font-bold pb-4">Our <span className='text-coral-red'>Popular</span> Products</h1>
      <p className='pb-8 max-w-md text-slate-gray opacity-80 font-montserrat'>Experience top-notch quality and style with our sought after selections. Discover a world of comfort, design and value</p>


      <div className='flex flex-row gap-12 flex-wrap justify-center items-center'>
        {products.map((item) => (
          <ShoeProduct
          shoe={item}
          >
          </ShoeProduct>
        ))}


      </div>


    </div>
    </section>
  )
  
}

export default PopularProducts