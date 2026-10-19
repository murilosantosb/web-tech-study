import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProduct } from '../../hooks/useProduct';
import { useRelatedProducts } from '../../hooks/useRelatedProducts';
import { useCart } from '../../contexts/CartContext';
import CardGroupComponent from '../../components/Card/CardGroup/CardGroupComponent';
import ClothingComponent from '../../components/Card/ClothingCard/ClothingComponent';
import * as S from './ProductPageStyles';
import ButtonComponent from '../../components/Button/ButtonComponent/ButtonComponent';
import QuantitySelectorComponent from '../../components/Button/QuantitySelectorComponent/QuantitySelectorComponent';

const ProductPage = () => {
    const { id } = useParams<{ id: string }>();
    const { product, isLoading, error } = useProduct();
    const { addToCart } = useCart();
    const [selectedMediaId, setSelectedMediaId] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);

    const { relatedProducts } = useRelatedProducts(product);

    useEffect(() => {
        if (product && product.images.length > 0) {
            const initialImg = product.images.find(img => img.type === 'primary') || product.images[0];
            setSelectedMediaId(initialImg.id);
        }
        window.scrollTo({ top: 0 });
    }, [product, id]);

    if (isLoading) {
        return (
            <S.PageLayout style={{ justifyContent: 'center', alignItems: 'center', height: '80vh', color: '#666' }}>
                Carregando produto...
            </S.PageLayout>
        );
    }

    if (error || !product) {
        return (
            <S.PageLayout style={{ justifyContent: 'center', alignItems: 'center', height: '80vh', color: 'red' }}>
                {error || 'Produto não encontrado'}
            </S.PageLayout>
        );
    }

    const sortedImages = [...product.images].sort((a, b) => a.order - b.order);
    const mediaItems = [
        ...sortedImages.map(img => ({ id: img.id, url: img.url, alt: img.alt, type: 'image' as const })),
        ...(product.videos || []).map(vid => ({ id: vid.id, url: vid.url, alt: vid.alt, type: 'video' as const }))
    ];

    const selectedMedia = mediaItems.find(item => item.id === selectedMediaId) || mediaItems[0];

    const formatPrice = (price: number | null) => {
        if (price === null) return 'Preço indisponível';
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
    };

    return (
        <S.PageLayout>
            <S.GallerySection>
                {mediaItems.length > 1 && (
                    <S.ThumbnailList>
                        {mediaItems.map((item, index) => (
                            <S.ThumbnailButton
                                key={item.id}
                                type="button"
                                $active={selectedMediaId === item.id}
                                onClick={() => setSelectedMediaId(item.id)}
                                aria-label={`Ver ${item.type === 'image' ? 'imagem' : 'vídeo'} ${index + 1} de ${mediaItems.length}`}
                                aria-pressed={selectedMediaId === item.id}
                            >
                                {item.type === 'image' ? (
                                    <img src={item.url} alt={item.alt} />
                                ) : (
                                    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                        <video src={item.url} preload="metadata" muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        <div style={{
                                            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                                            backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', borderRadius: '50%',
                                            width: '24px', height: '24px', display: 'flex', alignItems: 'center',
                                            justifyContent: 'center', fontSize: '12px', pointerEvents: 'none'
                                        }}>▶</div>
                                    </div>
                                )}
                            </S.ThumbnailButton>
                        ))}
                    </S.ThumbnailList>
                )}
                <S.MainView>
                    {selectedMedia && (
                        selectedMedia.type === 'image' ? (
                            <img
                                src={selectedMedia.url}
                                alt={selectedMedia.alt}
                                onError={() => {
                                    console.error(`Falha ao carregar imagem: ${selectedMedia.url}`);
                                }}
                            />
                        ) : (
                            <video
                                src={selectedMedia.url}
                                controls
                                muted
                                loop
                                playsInline
                                autoPlay
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )
                    )}
                </S.MainView>
            </S.GallerySection>

            <S.InfoSection>
                <S.ProductTitle>{product.name}</S.ProductTitle>

                <S.ProductSubtitle>
                    {product.description?.split('.')[0] || 'Produto de alta qualidade'}
                </S.ProductSubtitle>

                <S.ProductPrice>{formatPrice(product.price)}</S.ProductPrice>

                <S.ProductDescription>
                    {product.description || 'Sem descrição detalhada disponível.'}
                </S.ProductDescription>
                
                <section className='quantidade-produto-container'>
                    <p>Quantidade</p>
                    <QuantitySelectorComponent
                        value={quantity}
                        onChange={(newQty) => setQuantity(newQty)}
                    />
                </section>
                <section className='buttons-container'>
                    <ButtonComponent
                        title='Adicionar à sacola'
                        variant='secondary'
                        onClick={() => product && addToCart(product, quantity)}
                    />
                    <ButtonComponent
                        title='Comprar agora'
                        variant='primary'
                        onClick={() => product && addToCart(product, quantity)}
                    />
                </section>

                <S.BackLink to="/">Voltar para Home</S.BackLink>
            </S.InfoSection>

            {relatedProducts.length > 0 && (
                <S.RelatedSection>
                    <CardGroupComponent title="Você também pode gostar">
                        {relatedProducts.map(rp => (
                            <ClothingComponent
                                key={rp.id}
                                productId={rp.id}
                                title={rp.name}
                                description={''}
                                price={rp.price}
                                pathImage={rp.images[0]?.url}
                            />
                        ))}
                    </CardGroupComponent>
                </S.RelatedSection>
            )}
        </S.PageLayout>
    );
};

export default ProductPage;
