import React from 'react';
import styled from 'styled-components';

import images from '../../assets';

export default function Project(props) {
  
    return (
      <Container>
        <h3>{props.projects[0].name}</h3>
        <ProjectContainer image = {images[props.projects[0].image]}>
          <TechStackIconsContainer />
        </ProjectContainer>
        <p>{props.projects[0].info}</p>
      </Container>
    )
  }


const Container = styled.div`
    border: 1px solid black;
  `;
  
  const ProjectContainer = styled.div`
    width: 100%;
    height: 200px;
    background: url(${props => props.image});  
  `;
  
  const TechStackIconsContainer = styled.div`
    width: 50px;
    height: 20px;
    background-color: blue;
  `;


