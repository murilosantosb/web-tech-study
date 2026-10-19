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
    position: relative;
`;

export const TopRow = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
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

/* Mobile Menu Styles */

export const MenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
    backdrop-filter: blur(2px);
`;

export const MobilePanel = styled.div<{ $isOpen?: boolean }>`
    width: 80%;
    max-width: 300px;
    height: 100%;
    background-color: #ffffff;
    z-index: 1001;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
`;

export const PanelHeader = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 30px;
`;

export const MobileNavList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 20px;
`;

export const MobileNavLink = styled.li`
    font-size: 16px;
    font-weight: 500;
    color: #202020;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
        color: #888;
    }
`;

/* Responsive Utility Classes */

export const MobileOnly = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
    }
`;

export const DesktopOnly = styled.div`
    display: flex;
    @media (max-width: 768px) {
        display: none;
    }
`;
