import React from 'react'

import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='nav'>
      <ul className='menu'>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/sobre">Sobre</Link>
        </li>
        <li>
            <Link to="/faq">FAQ</Link>
        </li>
        <li>
            <Link to="contato">Contato</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
