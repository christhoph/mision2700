import React from 'react';
import styled from "styled-components";

import { GlobalStyles, Navbar, Footer } from "./core";
import Home from "./containers/Home";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const AppView = styled.div`
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const App = () => (
  <AppContainer>
    <AppView>
      <Navbar />
      <Home />
      <Footer />
    </AppView>
    <GlobalStyles />
  </AppContainer>
);

export default App;
