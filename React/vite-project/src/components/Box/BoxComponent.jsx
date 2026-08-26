import React from 'react';

import "./Box.css";

import boxData from '../../data/lorem.json';

const BoxComponent = () => {

  return (
    <div className="box-container">
        {boxData.map((box) => (
          <div key={box.id} className="box">
            <h2>{box.title}</h2>
            <p>{box.description}</p>
            <a href={box.link}>Saiba mais</a>
          </div>
        ))}
    </div>
  )
}

export default BoxComponent
