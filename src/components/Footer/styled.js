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
    color: ${({ theme }) => theme.color.primary};
    margin: 24px 0 24px 0;
    transition: 1s;

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        margin: 21px 0 21px 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        margin: 18px 0 18px 0;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin: 12px 0 12px 0;
    }

    &:hover {
        color: ${({ theme }) => theme.color.themeColor};
    }
`;

export const FooterParagraph = styled.p`
        margin-bottom: 56px;
`;

export const FooterThumbnailWrapper = styled.div`
    display: flex;
`;

export const FooterThumbnailLink = styled.a`
    
`;

export const FooterThumbnail = styled.div`
    width: 48px;
    margin: 24px;
    transition: 1s;

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        width: 42px;
        margin: 21px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        width: 40px;
        margin: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        width: 32px;
        margin: 16px;

    }

    &:hover {
        color: ${({ theme }) => theme.color.themeColor};
        transform: scale(110%);
    }
`;