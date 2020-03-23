import React, { Component } from 'react';
import styled from 'styled-components';

import { bosYellow } from '../../util/sharedStyles';

export default class SocialIcons extends Component {
  render() {
    return (
      <Container>
        <SocIcons className="fab fa-twitter"></SocIcons>
        <SocIcons className="fab fa-linkedin"></SocIcons>
        <SocIcons className="fab fa-github"></SocIcons>
        <SocIcons className="fas fa-envelope"></SocIcons>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  height: 3rem;
  margin-top: 1rem;
`;


const SocIcons = styled.i`
  font-size: 2rem;
  padding-right: 2rem;
  transition: all .2s ease-in;
  cursor: pointer;
  

  :hover {
    color: ${bosYellow};
    transform: scale(1.1);
  }
`;
