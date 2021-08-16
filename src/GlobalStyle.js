import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 18px;
}

button {
  cursor: pointer;
};

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: currentColor;
}`;