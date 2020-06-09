import React, { Fragment } from 'react';
import styled from 'styled-components';

import { blueGreen } from '../../util/sharedStyles';

import { projectImages, projectDevIcons } from '../../util/assets';

export default function Project(props) {
  return (
    <Fragment>
      {props.projects.map((project, index) => (
        <Container key={`container: ` + index}>
          <h3>{project.name}</h3>
          <ProjectContainer image={projectImages[project.image]}>
            <TechStackIconsContainer>
              {project.devIcons.map((icon) => (
                <DevIcons key={icon} className={projectDevIcons[icon]} />
              ))}
            </TechStackIconsContainer>
            <ButtonsContainer>
              {project.githubLink !== 'none' && (
                <a href={project.githubLink}>
                  <Buttons>
                    <ButtonIcons className="devicon-github-plain"></ButtonIcons>
                    Github
                  </Buttons>
                </a>
              )}
              {project.liveLink !== 'none' && (
                <a href={project.liveLink}>
                  <Buttons>
                    <ButtonIcons className="fas fa-home"></ButtonIcons>See Live
                  </Buttons>
                </a>
              )}
            </ButtonsContainer>
          </ProjectContainer>
          <p>{project.info}</p>
          {project.isDesktopOnly && (
            <DesktopOnlyText>
              ** DESKTOP ONLY!! Mobile version in development! **
            </DesktopOnlyText>
          )}
        </Container>
      ))}
    </Fragment>
  );
}

const Container = styled.div`
  border: 1px solid black;
  margin-bottom: 20px;
`;

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: url(${(props) => props.image});
  background-size: cover;
`;

const TechStackIconsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 20px;
  margin-top: 10px;
  display: inline-flex;
  background-color: #444444c7;
`;

const DevIcons = styled.i`
  font-size: 30px;
  color: white;
  padding: 5px 10px;
`;

const ButtonIcons = styled.i`
  font-size: 15px;
  margin-right: 10px;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  display: inline;
  bottom: 0;
  left: 0;
`;

const Buttons = styled.button`
  background-color: ${blueGreen};
  color: white;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
`;

const DesktopOnlyText = styled.p`
  font-weight: bold;
`;
