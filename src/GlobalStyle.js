import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

:focus {
  outline-offset: 8px;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  transition: color ease-in 2s;
}

button {
  cursor: pointer;
  display: block;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: currentColor;
}`