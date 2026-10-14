import React from 'react'
import { ButtonContainer } from './ButtonStyles';
import type { ButtonProps } from '../../../types/button';


const ButtonComponent = ({ title, variant }: ButtonProps) => {
  return (
    <ButtonContainer title={title} variant={variant}>
        {title}
    </ButtonContainer>
  )
}

export default ButtonComponent