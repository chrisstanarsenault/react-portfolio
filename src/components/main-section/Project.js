import React, { Fragment } from 'react';

import '../../styles/main-section/Project.scss';
import { projectImages, projectDevIcons } from '../../util/assets';

export default function Project(props) {
  return (
    <Fragment>
      {props.projects.map((project, index) => (
        <div className="project-container" key={`container: ` + index}>
          <h3>{project.name}</h3>
          <div
            className="project-image-container"
            image={projectImages[project.image]}
            style={{
              background: `url(${projectImages[project.image]})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="tech-stack-container">
              {project.devIcons.map((icon) => (
                <i key={icon} className={projectDevIcons[icon]} />
              ))}
            </div>
            <div className="buttons-container">
              {project.githubLink !== 'none' && (
                <a href={project.githubLink}>
                  <button>
                    <i className="devicon-github-plain"></i>
                    Github
                  </button>
                </a>
              )}
              {project.liveLink !== 'none' && (
                <a href={project.liveLink}>
                  <button>
                    <i className="fas fa-home"></i>See Live
                  </button>
                </a>
              )}
            </div>
          </div>
          <p>{project.info}</p>
          {project.isDesktopOnly && (
            <p className="desktop-only-text">
              ** DESKTOP ONLY!! Mobile version in development! **
            </p>
          )}
        </div>
      ))}
    </Fragment>
  );
}
