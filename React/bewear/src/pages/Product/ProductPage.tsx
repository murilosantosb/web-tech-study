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
            <section style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '20px' }}>
                {/* Render Imagens */}
                {product.images.map((img) => (
                    <img
                        key={img.id}
                        src={img.url}
                        alt={img.alt}
                        style={{ maxWidth: '300px', borderRadius: '10px' }}
                    />
                ))}

                {/* Render Vídeos - Correção: Usando tag <video> em vez de <img> */}
                {product.videos && product.videos.map((vid) => (
                    <video
                        key={vid.id}
                        src={vid.url}
                        controls
                        autoPlay
                        muted
                        loop
                        style={{ maxWidth: '300px', borderRadius: '10px' }}
                    >
                        Seu navegador não suporta vídeos.
                    </video>
                ))}
            </section>

            <h1 style={{ fontSize: '2rem', margin: '10px 0' }}>{product.name}</h1>
            <p style={{ maxWidth: '600px', color: '#666' }}>{product.description || 'Sem descrição disponível'}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.5rem', margin: '20px 0' }}>
                {product.price ? `R$ ${product.price}` : 'Preço indisponível'}
            </p>
            <a href="/" style={{ marginTop: '20px', color: '#666', textDecoration: 'underline', cursor: 'pointer' }}>
                Voltar para Home
            </a>
        </HomeContainer>
    );
}

export default ProductPage;
