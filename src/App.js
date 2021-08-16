import Footer from "./components/Footer";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Section from "./components/Section";
import skills from "./skills";
import goals from "./goals";
import { Container } from "./common/Container";

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
