import React from 'react'

import "./BoxImage.css";
import boxImageData from '../../../data/certifications.json';

const BoxImageComponent = () => {
  return (
    <div className="box-image-container">
      {boxImageData.map((box) => (
        <div key={box.id} className="box-image">
            <h2>{box.titulo}</h2>
            <p>{box.descricao}</p>
            <img src={box.imagem_url} alt={box.titulo} />
            <strong>Preço da Prova - {box.preco_prova}</strong>
        </div>
      ))}
    </div>
  )
}

export default BoxImageComponent
