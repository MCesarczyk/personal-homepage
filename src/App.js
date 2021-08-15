import Footer from "./Footer";
import Header from "./Header";
import Gallery from "./Gallery";
import Section from "./Section";
import skills from "./skills"
import goals from "./goals"

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
