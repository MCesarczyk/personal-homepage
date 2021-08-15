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

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        font-size: 28px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 18px;
    }
`;

export const FooterLink = styled.a`
    display: block;
    font-weight: 900;
    margin: 24px 0 24px 0;
    color: ${({ theme }) => theme.color.primary};
`;

export const FooterParagraph = styled.p`
        margin-bottom: 56px;
`;

export const FooterLogo = styled.img`
    margin: 12px;
`;