import styled, { css } from "styled-components";

const buttonVariants = {
  primary: css`
    background-color: var(--color-primary);
    color: #fff;
    &:hover { background-color: var(--color-primary-hover); }
  `,
  secondary: css`
    background-color: var(--color-surface);
    color: var(--color-text-primary);
    &:hover { background-color: #b9bec236; }
  `,
  danger: css`
    background-color: #dc3545;
    color: #fff;
    &:hover { background-color: #bd2130; }
  `,

  count: css`
    border: 0;
    outline: 0;
    font-weight: 600;
    padding: 5px;
    width: 50px;
  `
};

export const ButtonContainer = styled.button<{ $variant?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #a3a1a129;
    outline: none;
    width: 180px;
    padding: 15px;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(-1px);
    }

    ${(props) => buttonVariants[props.$variant as keyof typeof buttonVariants] || buttonVariants.primary}
`

