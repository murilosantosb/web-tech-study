import styled from "styled-components";

export const NavBarContainer = styled.nav`
    width: 100%;
    background-color: #ffffff;
    color: #202020;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
`;

export const TopRow = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LeftSection = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const WelcomeText = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #202020;
`;

export const CenterSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 2;

    img {
        height: 30px;
        width: auto;
    }

    @media (max-width: 768px) {
        flex: 1;
        justify-content: flex-start;
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 15px;
    flex: 1;
`;

export const Divider = styled.div`
    width: 1px;
    height: 20px;
    background-color: #e0e0e0;
`;

export const BottomRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0 20px 0;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 25px;
`;

export const NavLink = styled.li`
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    color: #202020;
    transition: color 0.2s ease;

    &:hover {
        color: #888;
    }
`;
