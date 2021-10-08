import { ThemeProvider } from "styled-components";
import { Container } from "./common/Container";
import ThemeSwitcher from "./features/themes/ThemeSwitcher";
import Header from "./components/Header";
import Section from "./common/Section";
import Gallery from "./features/repos/Gallery";
import Footer from "./components/Footer";
import skills from "./assets/data/skills";
import goals from "./assets/data/goals";
import { lightMode, darkMode } from './theme';
import { useDispatch, useSelector } from "react-redux";
import { fetchThemeState, selectTheme } from "./features/themes/themeSlice";
import { useEffect } from "react";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchThemeState());
  }, [dispatch]);

  const isThemeDark = useSelector(selectTheme);

  const theme = isThemeDark ? darkMode : lightMode;

  return (
    <>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
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
