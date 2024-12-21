import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { useState } from 'react'
import ShoeCard from '../components/ShoeCard'
import { statistics, shoes } from '../assets/constants'
import { bigShoe1 } from '../assets/images'

const Hero = () => {

  const [bigShoe, setBigShoe] = useState(bigShoe1);

  return (
    
    <section
    id='home'
    className='w-full
    flex flex-col lg:flex-row
    min-h-screen lg:justify-center
    max-container min-w-[300px]'>

      {/* w-full sets the width of the div to 100% by default, unless overridden (e.g., by xl:w-2/5). */}
      <div className='lg:w-1/2 flex 
      flex-col items-start max-xl:padding-x
      justify-start pt-64'>
        <p className='text-2xl text-orange-400 pb-8 pt-10'>Our Summer collections</p>
        <h1 className='text-8xl font-bold pb-4
        xl:whitespace-nowrap bg-white relative z-10 pr-10'><span className=''>The New Arrival</span>
        <br />
        <span className='text-8xl text-orange-600'>Nike</span> Shoes
        </h1>
        <p className='text-slate-gray opacity-80 leading-8 max-w-xs pb-8'>Discover stylish Nike arrivals, quality comfort, add innovation for your active life.</p>
        <div className='flex gap-12'>
          <Button label="Shop now"
          iconURL={arrowRight}>
          </Button>
          <Button label="Learn More"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray">
          </Button>
        </div>
        <div className='flex flex-row max-sm:flex-col flex-wrap'>
          {statistics.map((item) => (
            <div key={item.label} className='sm:pr-10 sm:mt-10 max-sm:py-5'>
              <p className='leading-tight font-bold text-4xl font-montserrat'>{item.value}</p>
              <p className='leading-tight font-montserrat font-light'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className='flex w-full flex-col max-lg:pt-20
      gap-10 items-center justify-center
    bg-hero bg-cover bg-center  pb-4'>
          <img src={bigShoe} className='h-fit z-10'></img>

          <div className='flex gap-10 mx-2'>
            {shoes.map((shoe) => (
              <ShoeCard key={shoe}
              shoeImg={shoe}
              actualBigShoe={bigShoe}
              changeBigShoe={(shoe) => setBigShoe(shoe)}>
              </ShoeCard>
            ))}
          </div>

      </div>

    </section>
  )
}

export default Hero