import styled from "styled-components";

export const TileHeader = styled.h2`
    font-size: 30px;
    margin: 0px;
`;

export const TileContainer = styled.div`
    box-shadow: 2px;
    padding: 32px;
    margin: 32px auto;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const TileList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${({ theme }) => theme.color.secondary};
    padding-left: 32px;

    @media (max-width: ${({theme}) => theme.breakpoints.netbookMax}) {
        grid-template-columns: 1fr 1fr;
        padding-left: 24px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.tabletMax}) {
        grid-template-columns: 1fr;
        padding-left: 14px;
    }
`;

export const TileListItem = styled.li`
    /* color: ${({ theme }) => theme.color.secondary}; */
    /* display: inline-block; */
`;