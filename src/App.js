import React from 'react';
import styled from "styled-components";

import { GlobalStyles } from "./core";
import Home from "./components/Home";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
`;

const App = () => (
  <AppContainer>
    <Home />
    <GlobalStyles />
  </AppContainer>
);

export default App;
