import React from 'react'

import "./Input.css"
import ButtonIconComponent from '../Button/ButtonIcon/ButtonIconComponent'
import { FaArrowUp } from "react-icons/fa";

const InputComponent = (props) => {
  return (
    <section className="input-section">
      <input type="text" placeholder={props.placeholder} className="input" />
      <span>
        <ButtonIconComponent variant="primary">
          <FaArrowUp />
        </ButtonIconComponent>
      </span>
    </section>
  )
}

export default InputComponent
