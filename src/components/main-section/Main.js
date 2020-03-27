import React, { Component } from 'react';
import styled from 'styled-components';

import About from "./About";
import Projects from "./Projects";

import { blueGreen } from '../../util/sharedStyles';


export default class Main extends Component {
  render() {
    return (
      <Wrapper>
        <About />
        <Projects />
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 65%;
  margin-left: auto;
  padding: 4.125rem;
  background: #fbf7f5;
`;
