import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

const { white } = colors;

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    background: ${white};
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 1rem;
  }
`;
