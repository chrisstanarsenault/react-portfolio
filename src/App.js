import React from 'react';
import styled from 'styled-components';

import Header from './components/header/Header';
import Main from './components/main-section/Main';

import { raleway } from './util/sharedStyles';

function App() {
  return (
    <MainContainer>
      <Header />
      <Main />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  font-family: ${raleway}
`;