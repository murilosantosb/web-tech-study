import './App.css'
import Banner from './components/Banner/Banner'
import Card from './components/Card/Card'
import ImgCard from './components/Card/ImgCard/ImgCard'
import Footer from './components/Footer/Footer'

// Components
import Header from './components/Header/Header'
import Input from './components/Input/Input'

function App() {
  return (
    <main>
      <Header title="Meu site" />

      <Input placeholder="Como posso ajudar você hoje?" />
      
      <Card />
      <hr />

      <ImgCard caption="New Lorem Ipsum" />

      <Banner >
        <h1>Bem vindo ao meu site</h1>
        <p>Aqui você ecnontra as melhores ofertas!</p>
      </Banner>


      <Footer title="Copyright &copy; 2026"/>
    </main>
  )
}

export default App
