import styled from "styled-components";

export const CartOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(4px);
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
`;

export const CartPanel = styled.div`
    width: 320px;
    height: 90vh;
    background-color: #fff;
    margin: 5vh 0;
    margin-right: 20px;
    border-radius: 14px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 1001;
    transition: transform 0.3s ease-in-out;
    transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(110%)'};

    @media (max-width: 480px) {
        width: 90vw;
        margin-right: 10px;
        margin-left: 10px;
    }
`;

export const CartHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    padding-bottom: 16px;
    border-bottom: 1px solid #f0f0f0;
`;

export const HeaderTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 18px;
`;

export const CloseButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    transition: color 0.2s;

    &:hover {
        color: #000;
    }
`;

export const ProductList = styled.div`
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-right: 8px;

    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background: #e0e0e0;
        border-radius: 10px;
    }
`;

export const EmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    text-align: center;
    color: #888;
    gap: 12px;
`;

export const CartFooter = styled.div`
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #f0f0f0;
`;

export const SubtotalRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 16px;
`;

export const CheckoutButton = styled.button`
    width: 100%;
    background-color: #5B28E3;
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s, transform 0.1s;

    &:hover {
        background-color: #4a21c2;
    }
    &:active {
        transform: scale(0.98);
    }
`;

export const ContinueLink = styled.a`
    display: block;
    text-align: center;
    margin-top: 16px;
    font-size: 14px;
    color: #000;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 400;
`;
