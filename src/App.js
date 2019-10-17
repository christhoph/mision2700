import React from 'react';
import styled from "styled-components";

import { GlobalStyles } from "./core";
import Routes from "./Routes";

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const AppView = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

const App = () => (
  <AppContainer>
    <AppView>
      <Routes />
    </AppView>
    <GlobalStyles />
  </AppContainer>
);

export default App;
