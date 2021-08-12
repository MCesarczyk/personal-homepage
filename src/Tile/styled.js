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
    height: 160px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
`;

export const TileListItem = styled.li`
    display: inline-block;
`;