import React, { Component } from 'react';
import styled from 'styled-components';

import images from '../../assets';

export default class Project extends Component {
  render() {
    return (
      <Container>
        <h3>{this.props.projects[0].name}</h3>
        <ProjectContainer image = {images[this.props.projects[0].image]}>
          <TechStackIconsContainer />
        </ProjectContainer>
        <p>{this.props.projects[0].info}</p>
      </Container>
    )
  }
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


