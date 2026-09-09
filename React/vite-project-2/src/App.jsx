import HeaderComponent from "./Components/Header/HeaderComponent"
import FooterComponent from "./Components/Footer/FooterComponent"
import "./global.css"
import Router from "./Routes/Router"

function App() {

  return (
    <div className='app-wrapper'>
      <HeaderComponent />
      <main className='main-content'>
        <Router />
      </main>
      <FooterComponent />
    </div>
  )
}

export default App
