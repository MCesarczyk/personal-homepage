import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 50%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        width: 100%;
    }
`;

export const FooterHeader = styled.h2`
    font-size: 32px;
    margin: 0px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 18px;
    }
`;

export const FooterLink = styled.a`
    font-weight: 900;
    color: ${({ theme }) => theme.color.primary};
`;