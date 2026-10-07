import { HomeContainer } from './HomeStyles'

const Home = () => {
  return (
    <HomeContainer>
        <img
            src="/Image 1 Mobile.png"
            alt="Coleção de roupas Mobile"
            className="img-mobile"
        />
        <img
            src="/Image 1 Desktop.png"
            alt="Coleção de roupas Desktop"
            className="img-desktop"
        />
    </HomeContainer>
  )
}

export default Home