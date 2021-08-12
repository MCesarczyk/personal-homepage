import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.color.background};
  max-width: 1280px;
  min-width: 320px;
  margin: 0 auto;
  padding: 32px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
}

button {
  cursor: pointer;
};

a {
  text-decoration: none;
}`;