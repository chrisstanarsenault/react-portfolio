import React from 'react';
import styled from 'styled-components';

import { bosYellow, rockSalt } from '../../util/sharedStyles';

export default function About() {
  return (
    <Container id="about">
      <Name>Chris Arsenault</Name>
      <AboutParagraph>
        Hi there! I am Chris Arsenault, a full stack developer from Toronto,
        Ontario, with a passion for all things front-end. I am extremely
        motivated and driven to grow my knowledge and skills in web development.
      </AboutParagraph>
    </Container>
  );
}

const Container = styled.div`
  max-width: 75%;
`;

const Name = styled.h3`
  font-family: ${rockSalt};
  font-size: 1.9rem;
  color: ${bosYellow};
  text-shadow: 1px 1px 1px #00000047;
  letter-spacing: 3px;
  text-decoration: underline;
`;

const AboutParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
`;
