import styled from "styled-components";

export const Button = styled.a`
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    padding: 12px 16px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.buttonText};
    background-color: ${({ theme }) => theme.color.themeColor};
    border: 1px solid ${({ theme }) => theme.color.elementBorder};
    transition: 1s;

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        font-size: 18px;
        padding: 10px 14px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: 16px;
        padding: 8px 12px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 14px;
        padding: 6px 10px;
    }

    &:hover {
        filter: brightness(130%);
        transform: scale(1.05);
    }
`;