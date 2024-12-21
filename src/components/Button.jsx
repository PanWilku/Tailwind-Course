import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className={`flex justify-center
    items-center
    gap-2 px-7 py-4 shrink-0
    font-montserrat text-lg border
    leading-none
    ${props.backgroundColor
      ? `${props.backgroundColor} ${props.textColor} ${props.borderColor}`
      : `bg-coral-red border-coral-red`
    }
  rounded-full`}>
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
    iconURL: PropTypes.string,
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    textColor: PropTypes.string
};


export default Button