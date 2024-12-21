import React from 'react'
import { shieldTick, support, truckFast } from '../assets/icons'
import { services } from './../assets/constants/index';
import ServicesCard from '../components/ServicesCard';

const Services = () => {
  return (
    <section>
      <div className='flex lg:gap-32 max-lg:gap-10
      max-lg:flex-col justify-around max-lg:items-center max-lg:min-w-[300px]'>
        {services.map((service) => (
          <ServicesCard
          label={service.label}
          imgURL={service.imgURL}
          subtext={service.subtext}>
          </ServicesCard>
        ))
        }
      </div>
    </section>
  )
}

export default Services