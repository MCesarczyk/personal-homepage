import { TileContainer, TileHeader, TileLink, TileList } from "./styled";

const Tile = ({ title, description, demoLink, codeLink }) => (
    <TileContainer>
        <TileHeader>{title}</TileHeader>
        <p>
            {description}
        </p>
        <TileList>
            <li>
                Demo:&nbsp;<TileLink href={demoLink} target="_blank">{demoLink}</TileLink>
            </li>
            <li>
                Code:&nbsp;<TileLink href={codeLink} target="_blank">{codeLink}</TileLink>
            </li>
        </TileList>
    </TileContainer>
);

export default Tile;