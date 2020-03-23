import React, { Component } from 'react';
import styled from "styled-components"; 

import SocialIcons from './SocialIcons';

import backgroundImage from '../../images/toronto-wall.jpg';
import resume from '../../download/Chris_Resume.pdf';

import { bosYellow, rockSalt } from '../../util/sharedStyles';


export default class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Name>Hi, I'm <ChrisSpan>Chris</ChrisSpan></Name>
          <Title>Front-End Developer</Title>
          <SocialIcons/>
          <Resume><ResumeLinks href="https://resume.creddle.io/resume/c0vx5zcd81p">View Resume</ResumeLinks> | <ResumeLinks href={resume} download>Download Resume</ResumeLinks></Resume>
        </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-image: url(${backgroundImage});
  background-attachment: fixed;
  background-size: 35% 100%;
  height: 100vh;
  width: 35%;
  position: fixed;
`;

const Container = styled.div`
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(68, 68, 68, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    
`;

const Name = styled.h2`
  padding-top: 10.5rem;
  padding-bottom: 2rem;
  font-size: 4.5rem;
  text-shadow: 2px 2px 6px #00000047;
  letter-spacing: 2px;
`;

const ChrisSpan = styled.span`
  color: ${bosYellow};
`;

const Title = styled.h3`
  font-family: ${rockSalt};
  font-size: 2rem;
  text-shadow: 2px 2px 6px #00000047;
`;

const Resume = styled.div`
  margin-top: 1rem;
  border: 2px solid ${bosYellow};
  padding: 1rem;
`;

const ResumeLinks = styled.a`
  text-decoration: none;
  color: white;
  transition: all .3s ease-in;

  :hover {
    color: ${bosYellow};
  }
`;