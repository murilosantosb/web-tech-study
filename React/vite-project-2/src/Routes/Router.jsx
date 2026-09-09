import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Sobre from '../Pages/Sobre/Sobre'
import NotFound from '../Pages/NotFound/NotFound'
import FAQ from '../Pages/FAQ/FAQ'
import NavBar from '../Components/Nav/Navbar'


const Router = () => {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/sobre' element={<Sobre />}/>
            <Route path='/faq' element={<FAQ />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
