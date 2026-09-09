import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Sobre from '../Pages/Sobre/Sobre'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sobre' element={<Sobre />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
