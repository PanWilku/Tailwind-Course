import React from 'react'

const ShoeCard = ({shoeURL, changeBigShoe, bigShoeImg}) => {


    const handleClick = () => {
        if(bigShoeImg !== shoeURL.bigShoe) {
            changeBigShoe(shoeURL.bigShoe)
        }
    }



  return (
    <div className={`border-2 rounded-xl
    ${bigShoeImg === shoeURL.bigShoe
    ? 'border-coral-red'
    : 'border-transparent'} 
    cursor-pointer`}
    onClick={handleClick}>
        <div className='flex bg-card bg-cover bg-center rounded-xl object-contain p-4
        w-40 h-40'>

            <img src={shoeURL.thumbnail} alt='shoe collection'
            className='object-contain'></img>

        </div>
    </div>

  )
}

export default ShoeCard