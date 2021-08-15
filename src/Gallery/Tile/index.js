import { TileBody, TileHeader, TileLink, TileList } from "./styled";

const Tile = ({ title, description, demoLink, codeLink }) => (
    <TileBody>
        <TileHeader>{title}</TileHeader>
        <p>
            {description}
        </p>
        <TileList>
            <li>
                Demo: <TileLink href={demoLink} target="_blank">{demoLink}</TileLink>
            </li>
            <li>
                Code: <TileLink href={codeLink} target="_blank">{codeLink}</TileLink>
            </li>
        </TileList>
    </TileBody>
);

export default Tile;