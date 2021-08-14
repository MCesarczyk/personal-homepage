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
  max-width: ${({theme})=>theme.breakpoints.netbookMax};
  min-width: ${({theme})=>theme.breakpoints.mobileMin};
  margin: 0 auto;
  padding: 32px;
  font-family: 'Inter', sans-serif;
  font-size: 18px;

    @media (max-width: ${({theme}) => theme.breakpoints.tabletMax}) {
        font-size: 16px;
        padding: 24px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobileMax}) {
        font-size: 14px;
        padding: 14px;
    }
}

button {
  cursor: pointer;
};

a {
  text-decoration: none;
}`;