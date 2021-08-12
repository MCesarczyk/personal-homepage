import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import Tile from "./Tile";

function App() {
  return (
    <>
      <Header
        title={"Headline"}
      />
      <Tile
        title={"My skills"}
      />
      <Tile
        title={"My closest goals"}
      />
      <Section
        title={"Portfolio"}
        subtitle={"My recent projects"}
        body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut labore voluptates, perspiciatis aliquid rerum ratione veniam tenetur. Debitis harum totam iusto impedit commodi est alias sit odit delectus laudantium deleniti, amet, culpa praesentium vel sunt nulla exercitationem rem, voluptatem recusandae voluptatibus inventore rerum. Aut repellat suscipit necessitatibus vero cupiditate?"}
      />
      <Footer />
    </>
  );
}

export default App;
