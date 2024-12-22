import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../assets/constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {
  
  
  return (
    <footer className='max-container'>

    <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
      
      <div className='flex flex-col items-start gap-4'>
        <a href='/'>
          <img src={footerLogo} width={150}></img>
        </a>
        <p className='text-lg text-slate-gray opacity-80 leading-8 max-w-sm font-montserrat'>Get shoes ready fro the new term at your nearest Nike store. Find your perfect Size in Store. Get Rewards.</p>

        <div className='flex items-center gap-5 mt-8'>
          {socialMedia.map((icon) => (
            <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
              <img src={icon.src} alt={icon.alt}></img>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
        {footerLinks.map((section) => (
          <div key={section}>
            <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
            <ul>{section.links.map((link) => (
              <li className='text-white mt-3 font-montserrat leading-normal
              hover:text-slate-gray cursor-pointer' key={link.name}>
                <a href={link.link}>
                  {link.name}</a>
              </li>
            ))}</ul>
          </div>
        ))}
      </div>
    </div>

    <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
      
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt='copyright sign' width={20} className='rounded-full m-0'></img>
          <p>All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms and Conditions</p>

    </div>

    </footer>
  )
}

export default Footer