import React from 'react';
import styled from 'styled-components';

import About from './About';
import Projects from './Projects';

export default function Main() {
  return (
    <Wrapper>
      <About />
      <Projects />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 65%;
  margin-left: auto;
  padding: 4.125rem;
`;
