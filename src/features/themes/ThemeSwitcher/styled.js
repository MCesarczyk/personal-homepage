import styled from "styled-components";

export const SwitcherButton = styled.button`
    font-size: 12px;
    width: 48px;
    height: 24px;
    padding: 1px;
    position: absolute;
    top: 40px; 
    right: 64px;

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        top: 36px; 
        right: 48px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        top: 32px; 
        right: 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        top: 24px; 
        right: 16px;
    }
`;