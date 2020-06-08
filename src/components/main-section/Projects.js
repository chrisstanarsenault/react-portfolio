import React from 'react';
import styled from 'styled-components';

import TorontoWall from '../../images/toronto-wall.jpg';

import Project from './Project';



export default function Projects() {

  const projects = [
    {
      name: "World Legal Summit",
      image: "torontoWall",
      liveLink: "https://worldlegalsummit.org",
      githubLink: "none",
      info: "A site built for the World Legal Summit. Check them out and get involved!",
    }
  ]
  
    return (
      <div>
        <h2>Projects</h2>
        <p>Take a look through some of the projects I have done</p>

        <Project projects={projects} />
      </div>

      
    )
  }
