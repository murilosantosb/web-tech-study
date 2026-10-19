import React from 'react'
import { ButtonContainer } from './ButtonStyles';
import type { ButtonProps } from '../../../types/button';

interface ExtendedButtonProps extends ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

const ButtonComponent = ({ title, variant, onClick, children }: ExtendedButtonProps) => {
  return (
    <ButtonContainer $variant={variant} onClick={onClick}>
        {children || title}
    </ButtonContainer>
  )
}

export default ButtonComponent