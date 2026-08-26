import './App.css'

// Components
import HeaderComponent from './components/Header/HeaderComponent'
import InputComponent from './components/Input/InputComponent'
import CardComponent from './components/Card/CardComponent'
import ImgCardComponent from './components/Card/ImgCard/ImgCardComponent'
import BannerComponent from './components/Banner/BannerComponent'
import FooterComponent from './components/Footer/FooterComponent'

function App() {
  return (
    <main>
      <HeaderComponent title="Meu site" />

      <InputComponent placeholder="Como posso ajudar você hoje?" />

      <CardComponent />
      <hr />

      <ImgCardComponent caption="New Lorem Ipsum" />

      <BannerComponent>
        <h1>Bem vindo ao meu site</h1>
        <p>Aqui você ecnontra as melhores ofertas!</p>
      </BannerComponent>


      <FooterComponent title="Copyright &copy; 2026" />
    </main>
  )
}

export default App
