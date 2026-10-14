import styled from "styled-components";

export const ClothingCardContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 280px;
    height: 420px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        width: 240px;
        height: 360px;
        scroll-snap-align: start;
    }

    img {
        border-radius: 15px;
        width: 100%;
        height: 300px;
        object-fit: cover;

        @media (max-width: 768px) {
            height: 240px;
        }
    }

    p.clothing-title {
        font-weight: 600;
    }

    p.clothing-description{
        color: #0000007a;
    }

    span.clothing-price {
        font-weight: 600;
    }
`;
