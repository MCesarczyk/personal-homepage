import styled from "styled-components";

export const TileHeader = styled.h2`
    font-size: 30px;
    margin: 0px;
`;

export const TileContainer = styled.div`
    box-shadow: 2px;
    border: 1px solid black;
    padding: 32px;
    margin: 32px auto;
`;

export const TileList = styled.ul`
    display: grid;
    column-gap: 115px;
    grid-template-columns: 1fr 1fr 1fr;
    color: ${({ theme }) => theme.color.secondary};
    align-items: start;
`;

export const TileListItem = styled.li`
    /* color: ${({ theme }) => theme.color.secondary}; */
    /* display: inline-block; */
`;