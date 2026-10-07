import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;

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
        width: 90%;
        border-radius: 15px;
        height: 800px;

        object-fit: cover;

        @media (min-width: 600px) {
            display: block;
        }
    }
`