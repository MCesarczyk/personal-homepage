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
        body={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut labore voluptates, perspiciatis aliquid rerum ratione veniam tenetur. Debitis harum totam iusto impedit commodi est alias sit odit delectus laudantium deleniti, amet, culpa praesentium vel sunt nulla exercitationem rem, voluptatem recusandae voluptatibus inventore rerum. Aut repellat suscipit necessitatibus vero cupiditate?"}
      />
      <Footer />
    </>
  );
}

export default App;
