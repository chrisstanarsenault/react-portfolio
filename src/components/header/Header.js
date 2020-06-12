import React from 'react';

import SocialIcons from './SocialIcons';

import '../../styles/header/Header.scss';
import resume from '../../download/Chris_Resume.pdf';

export default function Header() {
  return (
    <section>
      <article>
        <h2>
          Hi, I'm <span>Chris</span>
        </h2>
        <h3>Front-End Developer</h3>
        <SocialIcons />
        <div className="resume-container">
          <a
            className="resume-links"
            href="https://resume.creddle.io/resume/c0vx5zcd81p"
          >
            View Resume
          </a>{' '}
          |{' '}
          <a className="resume-links" href={resume} download>
            Download Resume
          </a>
        </div>
      </article>
    </section>
  );
}
