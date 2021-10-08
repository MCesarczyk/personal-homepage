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

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        min-width: 132px;
    width: 50%;
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
`;

export const HeaderButtonIcon = styled.div`
    width: 22px;
    margin-right: 18px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        width: 20px;
        margin-right: 16px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        width: 18px;
        margin-right: 14px;
    }
`;