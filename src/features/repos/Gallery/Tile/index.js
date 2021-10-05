import { TileBody, TileHeader, TileLink, TileList } from "./styled";

const Tile = ({ title, description, demoLink, codeLink }) => (
    <TileBody>
        <TileHeader>{title}</TileHeader>
        <p>
            {description}
        </p>
        <TileList>
            <li>
                Demo: <TileLink key={demoLink} href={demoLink} target="_blank">Demo</TileLink>
            </li>
            <li>
                Code: <TileLink key={codeLink} href={codeLink} target="_blank">Repository</TileLink>
            </li>
        </TileList>
    </TileBody>
);

export default Tile;