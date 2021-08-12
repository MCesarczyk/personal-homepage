import { Header } from "./Header";
import Tile from "./Tile";

function App() {
  return (
    <>
      <Header>
        Headline
      </Header>
      <p>
      Paragraph
      </p>
      <Tile
        title = {"Tile header"}
        body = {"Lorem ipsum"}
      />
    </>
  );
}

export default App;
