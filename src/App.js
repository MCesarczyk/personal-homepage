import Header from "./Header";
import Tile from "./Tile";

function App() {
  return (
    <>
      <Header
        title={"Headline"}
      />
      <Tile
        title={"Tile header"}
        body={"Lorem ipsum"}
      />
      <Tile
        title={"Tile header 2"}
        body={"Lorem ipsum again"}
      />
    </>
  );
}

export default App;
