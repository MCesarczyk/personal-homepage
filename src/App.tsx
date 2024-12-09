import { useEffect } from "react";
import { Normalize } from "styled-normalize";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from './theme';
import { GlobalStyle } from "./GlobalStyle";
import { Container } from "./common/Container";
import Section from "./common/Section";
import Header from "./components/Header";
import Footer from "./components/Footer";
import skills from "./assets/data/skills";
import goals from "./assets/data/goals";
import Gallery from "./features/repos/Gallery";
import ThemeSwitcher from "./features/themes/ThemeSwitcher";
import { fetchThemeState, selectTheme } from "./features/themes/themeSlice";

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
