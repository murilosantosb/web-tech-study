import './App.css'
import NavBarComponent from './components/NavBar/NavBarComponent'
import Router from './routes/Route'
import { CartProvider } from './contexts/CartContext'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <CartProvider>
      <Router />
      <Cart />
    </CartProvider>
  )
}

export default App
