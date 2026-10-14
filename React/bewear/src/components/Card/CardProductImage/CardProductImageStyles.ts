import styled from "styled-components";

export const PromoSectionContainer = styled.div`
    display: grid;
    grid-template-columns: minmax(0, 0.63fr) minmax(0, 1fr);
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 12px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        gap: 15px;
    }
`;

export const PromoCardContainer = styled.div<{ bgColor: string; isMain?: boolean }>`
    position: relative;
    border-radius: 20px;
    background: ${(props) => props.bgColor};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 20px;
    transition: transform 0.3s ease;
    isolation: isolate;

    &:hover {
        transform: translateY(-5px);
    }

    ${(props) => props.isMain && `
        grid-column: 2;
        grid-row: 1 / span 2;
        min-height: 520px;
    `}

    @media (max-width: 768px) {
        min-height: 300px;

        ${(props) => props.isMain && `
            grid-column: auto;
            grid-row: auto;
            order: -1;
            min-height: 400px;
        `}
    }
`;

export const PromoText = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    margin: 0;
    z-index: 2;
    position: relative;
    align-self: flex-start;
`;

export const PromoImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 1;
    pointer-events: none;

    @media (max-width: 768px) {
        width: 100%;
        height: 100%;
    }
`;

export const PromoButton = styled.button`
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: white;
    color: black;
    border: none;
    padding: 10px 25px;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    z-index: 2;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #f0f0f0;
    }

    @media (max-width: 768px) {
        padding: 12px 30px;
        font-size: 1rem;
    }
`;
