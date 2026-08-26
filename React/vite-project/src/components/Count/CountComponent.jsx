import React from 'react'

import "./Count.css";

import { useState } from 'react';

const CountComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <section className="count-component">
        <h1>Contador: {count}</h1>
        <button onClick={handleIncrement}>Aumentar</button>
        <button onClick={handleDecrement}>Diminuir</button>
    </section>
  )
}

export default CountComponent

