import styled from "styled-components";

export const Button = styled.button`
    font-size: 20px;
    padding: 12px 16px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.buttonText};
    background-color: ${({ theme }) => theme.color.themeColor};
    border: 1px solid ${({ theme }) => theme.color.elementBorder};
    transition: background-color 1s, filter 1s, transform 0.2s;

    &:hover {
        filter: brightness(130%);
        transform: scale(1.05);
    }
`;