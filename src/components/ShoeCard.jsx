import React from 'react'

const ShoeCard = ({shoeImg, actualBigShoe, changeBigShoe}) => {

    const handleClick = () => {
        if(shoeImg !== actualBigShoe) {
            changeBigShoe(shoeImg.bigShoe);
        }
    }

    return(

        <div className={`flex justify-center items-center
        border-2 rounded-xl ${shoeImg.bigShoe === actualBigShoe
            ? "border-coral-red"
            : "border-transparent"
        } bg-card bg-center bg-cover`}>
            <img src={shoeImg.thumbnail}
            onClick={handleClick}>
            
            </img>

        </div>

    )


}

export default ShoeCard