import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;

    .img-mobile {
        display: block;
        width: 100%;
        height: auto;
        max-height: 460px;
        object-fit: cover;
        border-radius: 15px;

        @media (min-width: 600px) {
            display: none;
        }
    }

    .img-desktop {
        display: none;
        width: 100%;
        border-radius: 15px;
        height: 800px;
        

        @media (min-width: 600px) {
            display: block;
        }
    }
`;
