import React from 'react';

import "./Header.css";



const HeaderComponent = (props) => {

  return (
    <header>
      <h1 className="title">{props.title}</h1>
    </header>
  )
}

export default HeaderComponent
