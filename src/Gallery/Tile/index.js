import { TileContainer, TileHeader, TileLink, TileList } from "./styled";

const Tile = ({ title, description, demoLink, codeLink }) => (
    <TileContainer>
        <TileHeader>{title}</TileHeader>
        <p>
            {description}
        </p>
        <TileList>
            <li>
                Demo: <TileLink>{demoLink}</TileLink>
            </li>
            <li>
                Code: <TileLink>{codeLink}</TileLink>
            </li>
        </TileList>
    </TileContainer>
);

export default Tile;