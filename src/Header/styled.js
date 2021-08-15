import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 64px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        grid-template-columns: 1fr;
        gap: 0px;
    }
`;

export const HeaderImage = styled.img`
    width: 400px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        width: 83%;
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

export const HeaderCaption = styled.p`
    font-size: 12px;
`;

export const HeaderParagraph = styled.p`
    margin-bottom: 32px;
`;

export const HeaderButton = styled.button`
    font-size: 20px;
    padding: 12px 16px;
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.blue};
    border: 1px solid ${({ theme }) => theme.color.elementBorder};
`;