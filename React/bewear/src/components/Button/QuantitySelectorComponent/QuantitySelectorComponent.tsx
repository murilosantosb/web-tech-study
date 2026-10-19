import React, { useState, useEffect } from 'react'
import { QuantifySelectorContainer } from './QuantitySelectorStyles'
import ButtonComponent from '../ButtonComponent/ButtonComponent';

interface Props {
    value?: number;
    onChange?: (value: number) => void;
}

const QuantitySelectorComponent = ({ value, onChange }: Props) => {
  const [count, setCount] = useState(value || 1);

  useEffect(() => {
      setCount(value || 1);
  }, [value]);

  const increment = () => {
      const newValue = count + 1;
      setCount(newValue);
      if (onChange) onChange(newValue);
  };

  const decrement = () => {
      const newValue = count > 1 ? count - 1 : 1;
      setCount(newValue);
      if (onChange) onChange(newValue);
  };

  return (
    <QuantifySelectorContainer>
        <ButtonComponent onClick={decrement} variant='count' title='-'/>
        <span>{count}</span>
        <ButtonComponent onClick={increment} variant='count' title='+'/>
    </QuantifySelectorContainer>
  )
}

export default QuantitySelectorComponent