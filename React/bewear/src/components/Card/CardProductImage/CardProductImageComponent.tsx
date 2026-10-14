import React from 'react'
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

const PromoCard = ({ image, title, bgColor, isMain = false }: { image: string; title: string; bgColor: string; isMain?: boolean }) => {
    return (
        <PromoCardContainer bgColor={bgColor} isMain={isMain}>
            <PromoText>{title}</PromoText>
            <PromoImage src={image} alt={title} />
            <PromoButton>Comprar</PromoButton>
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
                />
            ))}
        </PromoSectionContainer>
    )
}

export default CardProductImageComponent