import styled from "styled-components";

export const CardGroupContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 20px;
    width: 100%;
    max-width: 1200px;
`;

export const CardGroupList = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;

    @media (max-width: 768px) {
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        flex-wrap: nowrap;
        -webkit-overflow-scrolling: touch;
        overscroll-behavior-x: contain;
        scroll-snap-type: x proximity;
        padding: 10px 0 20px 0;

        &::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;
