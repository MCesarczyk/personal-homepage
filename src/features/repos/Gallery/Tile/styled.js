import styled from "styled-components";

export const TileBody = styled.div`
    text-align: left;
    padding: 56px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.secondaryBackground};
    border: ${({ theme }) => theme.border};
    box-shadow: ${({ theme }) => theme.shadow};
    transition: color ease-in 2s, background-color ease-in 2s, box shadow ease-in 1s;

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        font-size: 16px;
        padding: 48px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: 14px;
        padding: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 14px;
        padding: 24px;
    }
    
    &:hover {
        box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.color.themeColor};
    }
`;

export const TileHeader = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.themeColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.netbookMax}) {
        font-size: 22px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        font-size: 20px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 16px;
    }
`;

export const TileList = styled.ul`
    list-style: none;
    padding-left: 0px;
`;

export const TileLink = styled.a`
    color: ${({ theme }) => theme.color.themeColor};
`;