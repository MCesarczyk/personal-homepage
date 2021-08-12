import Header from "./Header";
import Tile from "./Tile";

function App() {
  return (
    <>
      <Header
        title={"Headline"}
      />
      <p>
        Paragraph
      </p>
      <Tile
        title={"Tile header"}
        body={"Lorem ipsum"}
      />
    </>
  );
}

export default App;
