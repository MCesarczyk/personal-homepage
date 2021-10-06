import { TileBody, TileHeader, TileLink, TileList } from "./styled";

const Tile = ({ title, description, demoLink, codeLink }) => (
    <TileBody>
        <TileHeader>{title}</TileHeader>
        <p>
            {description}
        </p>
        <TileList>
            <li key={demoLink}>
                Demo: <TileLink href={demoLink} target="_blank">Demo</TileLink>
            </li>
            <li key={codeLink}>
                Code: <TileLink href={codeLink} target="_blank">Repository</TileLink>
            </li>
        </TileList>
    </TileBody>
);

export default Tile;