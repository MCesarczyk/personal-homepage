import { TileContainer, TileHeader, TileList, TileListItem } from "./styled";

const Tile = ({ title, body }) => (
    <TileContainer>
        <TileHeader>
            {title}
        </TileHeader>
        <TileList>
            <TileListItem>some</TileListItem>
            <TileListItem>sample</TileListItem>
            <TileListItem>words</TileListItem>
            <TileListItem>some</TileListItem>
            <TileListItem>sample</TileListItem>
            <TileListItem>words</TileListItem>
            <TileListItem>some</TileListItem>
            <TileListItem>sample</TileListItem>
            <TileListItem>words</TileListItem>
            <TileListItem>some</TileListItem>
            <TileListItem>sample</TileListItem>
            <TileListItem>words</TileListItem>
            <TileListItem>some</TileListItem>
            <TileListItem>sample</TileListItem>
            <TileListItem>words</TileListItem>
            <TileListItem>some</TileListItem>
            <TileListItem>sample</TileListItem>
            <TileListItem>words</TileListItem>
            <TileListItem>some</TileListItem>
            <TileListItem>sample</TileListItem>
            <TileListItem>words</TileListItem>
        </TileList>
    </TileContainer>
);

export default Tile;