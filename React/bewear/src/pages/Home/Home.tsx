import BrandCardComponent from '../../components/Card/BrandCard/BrandCardComponent'
import CardGroupComponent from '../../components/Card/CardGroup/CardGroupComponent'
import CardProductImageComponent from '../../components/Card/CardProductImage/CardProductImageComponent'
import ClothingComponent from '../../components/Card/ClothingCard/ClothingComponent'
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

        <CardGroupComponent title='Marcas parceiras'>
          <BrandCardComponent path='simple-icons_nike.png' name='Nike'/>
          <BrandCardComponent path='simple-icons_adidas.png' name='Adidas'/>
          <BrandCardComponent path='simple-icons_puma.png' name='Puma'/>
          <BrandCardComponent path='simple-icons_newbalance.png' name='New Balance'/>
          <BrandCardComponent path='simple-icons_convese.png' name='Converse'/>
          <BrandCardComponent path='simple-icons_polo.png' name='Polo'/>
          <BrandCardComponent path='simple-icons_zara.png' name='Zara'/>
        </CardGroupComponent>

        <CardGroupComponent title='Mais vendidos'>
          <ClothingComponent title='Nike Therma FIT Headed' description='Men´s Fleece Shacket' price={490} pathImage='clothing-4.png'/>
          <ClothingComponent title='Nike Therma FIT Headed' description='Men´s Fleece Shacket' price={749} pathImage='clothing-3.png'/>
          <ClothingComponent title='Nike Therma FIT Headed' description='Men´s Fleece Shacket' price={520} pathImage='clothing-2.png'/>
          <ClothingComponent title='Nike Therma FIT Headed' description='Men´s Fleece Shacket' price={380} pathImage='clothing-1.png'/>
        </CardGroupComponent>

        <CardProductImageComponent />

    </HomeContainer>
  )
}

export default Home