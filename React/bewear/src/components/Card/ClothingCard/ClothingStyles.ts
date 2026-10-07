import styled from "styled-components";

export const ClothingCardContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    width: 330px;
    height: 500px;

    img {
        border-radius: 15px;
        width: 330px;
        height: 380px;
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
`