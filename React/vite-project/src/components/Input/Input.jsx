import React from 'react'

import "./Input.css"
import ButtonIcon from '../Button/ButtonIcon/ButtonIcon'
import { FaArrowUp } from "react-icons/fa";

const Input = (props) => {
  return (
    <section className="input-section">
      <input type="text" placeholder={props.placeholder} className="input" />
      <span>
        <ButtonIcon variant="primary">
          <FaArrowUp />
        </ButtonIcon>
      </span>
    </section>
  )
}

export default Input
