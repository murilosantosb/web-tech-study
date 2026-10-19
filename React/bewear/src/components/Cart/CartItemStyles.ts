import styled from "styled-components";

export const ItemContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`;

export const Thumbnail = styled.div`
    width: 54px;
    height: 54px;
    background-color: #f5f5f5;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 2px;
`;

export const ProductName = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #202020;
`;

export const ProductDesc = styled.span`
    font-size: 11px;
    color: #888;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 120px;
`;

export const Price = styled.span`
    font-size: 13px;
    font-weight: 600;
    color: #202020;
    margin-left: auto;
`;

export const ControlsSection = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
`;

export const ControlButton = styled.button`
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #666;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f5f5f5;
    }
`;

export const QuantityValue = styled.span`
    font-size: 12px;
    font-weight: 600;
    min-width: 15px;
    text-align: center;
`;

export const RemoveButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #ff4d4f;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }
`;
