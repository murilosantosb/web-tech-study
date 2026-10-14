import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarComponent from "../components/NavBar/NavBarComponent";

import Home from "../pages/Home/Home.tsx";
import ProductPage from "../pages/Product/ProductPage.tsx";

const Router = () => {
  return (
    <BrowserRouter>
        <NavBarComponent />
        <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/product/:id' element={ <ProductPage /> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router;