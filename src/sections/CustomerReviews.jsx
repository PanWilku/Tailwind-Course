import React from 'react'
import { reviews } from '../assets/constants'
import CustomerCard from '../components/CustomerCard'

const CustomerReviews = () => {
  return (
    
    <section>

      <div className='flex justify-center overflow-hidden  w-full'>
        <div className='flex flex-col w-1/2 min-w-[300px] text-center break-words'>
          <h1 className='text-4xl font-bold pb-8'>What Our <span className='text-coral-red'>Customers</span> Say?</h1>
          <p className="text-slate-gray opacity-80 font-montserrat">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row justify-center items-center text-center flex-wrap p-4'>
        {reviews.map((review) => (
          <CustomerCard key={review.feedback}
            imgURL={review.imgURL}
            customerFeedback={review.feedback}
            customerRating={review.rating}
            customerName={review.customerName}>
          </CustomerCard>
        ))}
      </div>

      

    </section>
  )
}

export default CustomerReviews