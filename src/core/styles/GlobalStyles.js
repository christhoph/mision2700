import { createGlobalStyle } from "styled-components";

import { colors } from "./colors";

const { white, darkBlue } = colors;

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap');

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
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${darkBlue};
    border: 0 none transparent;
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${darkBlue};
  }

  ::-webkit-scrollbar-track {
    background: ${white};
    border: 0 none transparent;
  }

  ::-webkit-scrollbar-track:hover {
    background: ${white};
  }

  ::-webkit-scrollbar-corner {
    background: transparent;
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

  input[type='number'] {
    -moz-appearance:textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }
`;
