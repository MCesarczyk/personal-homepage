import { ThemeProvider } from "styled-components";
import { Container } from "./common/Container";
import ThemeSwitcher from "./features/themes/ThemeSwitcher";
import Header from "./components/Header";
import Section from "./components/Section";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import skills from "./skills";
import goals from "./goals";
import { lightMode, darkMode } from './theme';
import { useLocalStorageState } from "./useLocalStorageState";

function App() {
  const [theme, setTheme] = useLocalStorageState("theme", lightMode);

  const onButtonClick = () => {
    setTheme(theme === lightMode ? darkMode : lightMode)
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ThemeSwitcher
          theme={theme}
          onClick={() => onButtonClick()}
        >
        </ThemeSwitcher>
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
      </ThemeProvider>
    </>
  );
}

export default App;
