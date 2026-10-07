import styled from "styled-components";

export const BrandCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-5px);
    }

    .image-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        border: 2px solid #c0bfbf48;
        background-color: #fff;
        transition: border-color 0.2s ease;
        padding: 15px;

        /* Mobile size */
        width: 80px;
        height: 80px;

        &:hover {
            border-color: #202020;
        }

        img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
        }

        /* Desktop size */
        @media (min-width: 769px) {
            width: 200px;
            height: 108px;
        }
    }

    p {
        font-weight: 600;
        font-size: 14px;
        color: #202020;
        margin: 0;
        text-align: center;
    }
`;
