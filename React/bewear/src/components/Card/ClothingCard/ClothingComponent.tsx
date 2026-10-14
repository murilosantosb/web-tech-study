import React from 'react';
import { Link } from 'react-router-dom';
import { ClothingCardContainer } from "./ClothingStyles";

type Props = {
    pathImage: string,
    title: string,
    description: string,
    price: number | null,
    productId: string,
}

const ClothingComponent = (props: Props) => {
  return (
    <Link to={`/product/${props.productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <ClothingCardContainer>
          <img src={props.pathImage} alt={`${props.title}`} />
          <div>
              <p className='clothing-title'>{props.title}</p>
              <p className='clothing-description'>{props.description}</p>
          </div>
          <span className='clothing-price'>
              {props.price !== null ? `R$ ${props.price}` : 'Preço indisponível'}
          </span>
      </ClothingCardContainer>
    </Link>
  )
}

export default ClothingComponent