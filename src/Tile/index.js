import { TileContainer, TileHeader, TileList, TileListItem } from "./styled";

const Tile = ({ title, elements }) => (
    <TileContainer>
        <TileHeader>
            {title}
        </TileHeader>
        <TileList>
            {elements.map(element => (
                <TileListItem key={element} >
                    {element}
                </TileListItem>
            ))}
        </TileList>
    </TileContainer>
);

export default Tile;