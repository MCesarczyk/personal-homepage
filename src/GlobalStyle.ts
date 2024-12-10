import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

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
  background-color: ${({ theme }: { theme: Theme }) => theme.color.background};
  color: ${({ theme }) => theme.color.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        font-size: 14px;
    }
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
