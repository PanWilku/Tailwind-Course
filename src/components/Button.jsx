import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className='flex justify-center
    items-center
    gap-2 px-7 py-4
    font-montserrat text-lg
    leading-none  bg-coral-red rounded-full
    border-coral-red'>
        {props.label}
        {props.iconURL && <img 
        src={props.iconURL}
        alt='arrow right icon'
        className='ml-2 rouunded-full w-5 h-5'/>}
    </button>
  )
}


Button.propTypes = {
    label: PropTypes.string,
    iconURL: PropTypes.string
};


export default Button