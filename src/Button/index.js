import styled from "styled-components";

export const Button = styled.button`
    font-size: 20px;
    padding: 12px 16px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue};
    border: 1px solid ${({ theme }) => theme.color.elementBorder};
`;