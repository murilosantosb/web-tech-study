import React from 'react'

import "./Box.css"

const Box = (props) => {

  return (
    <section className='container-box'>
      <img className='image' src={props.imagem} alt="" />
      <h1 className='title-box'>{props.title}</h1>
      <p className='description-box'>
        {props.description}
      </p>
    </section>
  )
}

export default Box
