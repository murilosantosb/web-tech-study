import React from 'react'

import "./ImgCard.css";

const ImgCard = (props) => {
  return (
    <div className="image-card">
      <img className="image-card-img" src="/img-card2.jpg" alt={"Card Image" || "Image"} />
      <p className="image-card-caption">{props.caption}</p>
    </div>
  )
}

export default ImgCard
