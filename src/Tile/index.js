import { Container, TileHeader } from "./styled";

const Tile = ({ title, body }) => (
    <Container>
        <TileHeader>
            {title}
        </TileHeader>
        {body}
    </Container>
);

export default Tile;