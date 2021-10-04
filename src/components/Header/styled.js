import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 64px;
    margin-top: -30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        grid-template-columns: 1fr;
        gap: 0px;
    }
`;

export const HeaderInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const HeaderImage = styled.img`
    width: 400px;

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        width: 340px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        width: 280px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        width: 132px;
    }
`;

export const HeaderTitle = styled.h1`
    display: block;
    font-size: 38px;
    font-weight: 900;
    text-align: left;
    margin-top: 12px;
    margin-bottom: 36px;

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        font-size: 32px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: 22px;
    }
`;

export const HeaderParagraph = styled.p`
    margin-bottom: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: 17px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 17px;
    }
`;

export const HeaderButtonIcon = styled.img`
    height: 18px;
    margin-bottom: -2px;
    margin-right: 18px;
    text-align: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        height: 16px;
        margin-right: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        height: 14px;
        margin-right: 14px;
    }
`;