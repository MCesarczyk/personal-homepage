import styled from "styled-components";

export const TileContainer = styled.div`
    text-align: left;
    padding: 56px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);

    @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
        padding: 40px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        padding: 24px;
    }
`;

export const TileHeader = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.blue};

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
    color: ${({ theme }) => theme.color.blue};
`;