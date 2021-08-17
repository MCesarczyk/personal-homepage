import styled from "styled-components";

export const SwitcherButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    width: 160px;
    height: 24px;
    padding: 0px;
    border: none;
    color: ${({ theme }) => theme.color.primary};
    background-color: transparent;
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

export const SwitcherButtonImage = styled.img`
    width: 60px;
    margin-bottom: -8px;
    fill: crimson;
`;