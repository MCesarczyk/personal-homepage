import styled from "styled-components";

export const Button = styled.button`
    font-size: 20px;
    padding: 12px 16px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.buttonText};
    background-color: ${({ theme }) => theme.color.themeColor};
    border: 1px solid ${({ theme }) => theme.color.elementBorder};
`;