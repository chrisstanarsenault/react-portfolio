import React, { Component } from 'react';
import styled from 'styled-components';

import { bosYellow } from '../../util/sharedStyles';

export default class SocialIcons extends Component {
  render() {
    return (
      <Container>
        <SocialLink href="https://www.twitter.com/mynameischrisa"><SocialIcon className="fab fa-twitter"></SocialIcon></SocialLink>
        <SocialLink href="https://www.linkedin/in/chrisstanarsenault"><SocialIcon className="fab fa-linkedin"></SocialIcon></SocialLink>
        <SocialLink href="https://www.github.com/chrisstanarsenault"><SocialIcon className="fab fa-github"></SocialIcon></SocialLink>
        <SocialLink href="mailto: chrisstanarsenault@gmail.com"><SocialIcon className="fas fa-envelope"></SocialIcon></SocialLink>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  height: 3rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  text-decoration: none;
  color: white;
`;


const SocialIcon = styled.i`
  font-size: 2.4rem;
  padding-right: 2rem;
  transition: all .2s ease-in;
  cursor: pointer;
  

  :hover {
    color: ${bosYellow};
    transform: scale(1.1);
    ;
  }
`;
