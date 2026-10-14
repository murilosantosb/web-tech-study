import React from 'react';
import BrandCardComponent from '../../components/Card/BrandCard/BrandCardComponent'
import CardGroupComponent from '../../components/Card/CardGroup/CardGroupComponent'
import CardProductImageComponent from '../../components/Card/CardProductImage/CardProductImageComponent'
import ClothingComponent from '../../components/Card/ClothingCard/ClothingComponent'
import { HomeContainer } from './HomeStyles'
import { useStoreData } from '../../hooks/useStoreData';
import type { Brand, Product, Banner } from '../../types/store';

const Home = () => {
    const {
        partnerBrands,
        bestSellers,
        promoBanners,
        banners,
        isLoading,
        error
    } = useStoreData();

    if (isLoading) {
        return <HomeContainer style={{ justifyContent: 'center', color: '#666' }}>Carregando BEWEAR...</HomeContainer>;
    }

    if (error) {
        return <HomeContainer style={{ justifyContent: 'center', color: 'red' }}>{error}</HomeContainer>;
    }

    return (
        <HomeContainer>
            {/* Hero Section */}
            {banners.find(b => b.id === 'banner-hero') && (
                <>
                    <img
                        src={banners.find(b => b.id === 'banner-hero')?.imageMobile}
                        alt="Coleção de roupas Mobile"
                        className="img-mobile"
                    />
                    <img
                        src={banners.find(b => b.id === 'banner-hero')?.imageDesktop}
                        alt="Coleção de roupas Desktop"
                        className="img-desktop"
                    />
                </>
            )}

            <CardGroupComponent title='Marcas parceiras'>
                {partnerBrands.map((brand) => (
                    <BrandCardComponent
                        key={brand.id}
                        path={brand.logo}
                        name={brand.name}
                    />
                ))}
            </CardGroupComponent>

            <CardGroupComponent title='Mais vendidos'>
                {bestSellers.map((product) => (
                    <ClothingComponent
                        key={product.id}
                        productId={product.id}
                        title={product.name}
                        description={''}
                        price={product.price ?? null}
                        pathImage={product.images[0]?.url || ''}
                    />
                ))}
            </CardGroupComponent>

            <CardProductImageComponent
                banners={promoBanners}
            />
        </HomeContainer>
    );
}

export default Home