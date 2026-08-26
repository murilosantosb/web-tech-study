import React from 'react'

import "./Footer.css";

const FooterComponent = (props) => {
  return (
    <footer>
        <p>{props.title}</p>
    </footer>
  )
}

export default FooterComponent
