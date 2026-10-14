import React from 'react';
import { useProduct } from '../../hooks/useProduct';
import { HomeContainer } from '../Home/HomeStyles';

const ProductPage = () => {
    const { product, isLoading, error } = useProduct();

    if (isLoading) {
        return <HomeContainer style={{ justifyContent: 'center', color: '#666' }}>Carregando produto...</HomeContainer>;
    }

    if (error || !product) {
        return <HomeContainer style={{ justifyContent: 'center', color: 'red' }}>{error || 'Produto não encontrado'}</HomeContainer>;
    }

    return (
        <HomeContainer style={{ justifyContent: 'center', textAlign: 'center' }}>
            <h1>{product.name}</h1>
            <p>{product.description || 'Sem descrição disponível'}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
                {product.price ? `R$ ${product.price}` : 'Preço indisponível'}
            </p>
            <a href="/" style={{ marginTop: '20px', color: '#666', textDecoration: 'underline', cursor: 'pointer' }}>
                Voltar para Home
            </a>
        </HomeContainer>
    );
}

export default ProductPage;
