import React from 'react'



import "./ButtonIcon.css"

const ButtonIcon = (props) => {
  return (
    <>
     <button className="button-icon">
        {props.children}
     </button> 
    </>
  )
}

export default ButtonIcon
