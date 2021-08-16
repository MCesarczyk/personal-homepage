import Footer from "./Footer";
import Header from "./Header";
import Gallery from "./Gallery";
import Section from "./Section";
import skills from "./skills";
import goals from "./goals";
import { Container } from "./Container";

function App() {
  return (
    <Container>
      <Header />
      <Section
        title={"My skills"}
        elements={skills}
      />
      <Section
        title={"My closest goals"}
        elements={goals}
      />
      <Gallery
        title={"Portfolio"}
        subtitle={"My recent projects"}
      />
      <Footer />
    </Container>
  );
}

export default App;
