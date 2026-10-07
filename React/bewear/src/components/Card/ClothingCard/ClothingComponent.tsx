import React from 'react';

import { ClothingCardContainer } from "./ClothingStyles";

type Props = {
    pathImage: string,
    title: string,
    description: string,
    price: number, 
}

const ClothingComponent = (props: Props) => {
  return (
    <ClothingCardContainer>
        <img src={`./clothes/${props.pathImage}`} alt={`${props.title}`} />
        <div>
            <p className='clothing-title'>{props.title}</p>
            <p className='clothing-description'>{props.description}</p>
        </div>
        <span className='clothing-price'>
            R$ {props.price}
        </span>
    </ClothingCardContainer>
  )
}

export default ClothingComponent