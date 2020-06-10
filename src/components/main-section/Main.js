import React from 'react';
import styled from 'styled-components';

import About from './About';
import Projects from './Projects';
import NavBar from './NavBar';

export default function Main() {
  return (
    <Wrapper>
      <NavBar />
      <About />
      <Projects />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 65%;
  margin-left: auto;
  padding: 0 4.125rem;
`;
