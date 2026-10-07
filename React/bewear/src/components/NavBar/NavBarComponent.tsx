import React from 'react'

// Styles
import { NavBarContainer } from "./NavBarStyles";

import { ShoppingBag, Menu } from "lucide-react";


const NavBarComponent = () => {
  return (
    <NavBarContainer>
        <img src="./Logo.png" alt="logo" />
        <span>
            <ShoppingBag size={27}/>
            <Menu size={27}/>
        </span>
    </NavBarContainer>
  )
}

export default NavBarComponent