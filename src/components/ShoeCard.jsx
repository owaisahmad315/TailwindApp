import React from 'react'

const ShoeCard = ({ imgURL, ChangeBigShoeImage, bigShoeImage}) => {
  return (
    <div 
    className={`border-2 rounded-xl ${
        bigShoeImage === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick} 
    >

        ShoeCard
    </div>
  )
}

export default ShoeCard