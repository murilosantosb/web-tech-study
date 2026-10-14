import React from 'react';
import { Link } from 'react-router-dom';
import {
    PromoSectionContainer,
    PromoCardContainer,
    PromoImage,
    PromoText,
    PromoButton
} from "./CardProductImageStyles";
import type { Banner } from "../../../types/store";

type Props = {
    banners: Banner[];
}

const PromoCard = ({ image, title, bgColor, isMain = false, productId }: { image: string; title: string; bgColor: string; isMain?: boolean; productId?: string }) => {
    return (
        <PromoCardContainer bgColor={bgColor} isMain={isMain}>
            <PromoText>{title}</PromoText>
            <PromoImage src={image} alt={title} />
            {productId ? (
                <Link to={`/product/${productId}`} style={{ textDecoration: 'none' }}>
                    <PromoButton>Comprar</PromoButton>
                </Link>
            ) : (
                <PromoButton disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>Comprar</PromoButton>
            )}
        </PromoCardContainer>
    )
}

const CardProductImageComponent = ({ banners }: Props) => {
    return (
        <PromoSectionContainer>
            {banners.map((banner) => (
                <PromoCard
                    key={banner.id}
                    image={banner.image || ''}
                    title={banner.title || ''}
                    bgColor={banner.bgColor || ''}
                    isMain={banner.isMain}
                    productId={banner.productId}
                />
            ))}
        </PromoSectionContainer>
    )
}

export default CardProductImageComponent