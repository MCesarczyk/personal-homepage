import { ThemeProvider } from "styled-components";
import { Container } from "./common/Container";
import ThemeSwitcher from "./features/themes/ThemeSwitcher";
import Header from "./components/Header";
import Section from "./common/Section";
import Gallery from "./features/repos/Gallery";
import Footer from "./components/Footer";
import skills from "./skills";
import goals from "./goals";
import { lightMode, darkMode } from './theme';
import { useSelector } from "react-redux";
import { selectTheme } from "./features/themes/themeSlice";

function App() {
  const isThemeDark = useSelector(selectTheme);
  console.log(isThemeDark);

  const theme = isThemeDark ? darkMode : lightMode;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <ThemeSwitcher />
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
      </ThemeProvider>
    </>
  );
}

export default App;
