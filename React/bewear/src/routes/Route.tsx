import { BrowserRouter, Routes, Route } from "react-router";
import NavBarComponent from "../components/NavBar/NavBarComponent";

import Home from "../pages/Home/Home.tsx";

const Router = () => {
  return (
    <BrowserRouter>
        <NavBarComponent />
        <Routes>
            <Route path='/' element={ <Home /> }/>

        </Routes>
    </BrowserRouter>
  )
}

export default Router;