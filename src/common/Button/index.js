import styled from "styled-components";

export const Button = styled.a`
    display: inline-flex;
    font-size: 20px;
    padding: 12px 16px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.buttonText};
    background-color: ${({ theme }) => theme.color.themeColor};
    border: 1px solid ${({ theme }) => theme.color.elementBorder};
    transition: 1s;

    &:hover {
        filter: brightness(130%);
        transform: scale(1.05);
    }
`;