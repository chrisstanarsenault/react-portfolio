import React from 'react';
import { Link } from 'react-scroll';

import '../../styles/main-section/NavBar.scss';

export default function NavBar() {
  return (
    <div>
      <ul className="nav-bar">
        <Link
          to="about"
          spy={true}
          duration={500}
          smooth={true}
          activeClass="active"
        >
          <li className="nav-item">About</li>
        </Link>
        <Link
          to="projects"
          spy={true}
          duration={500}
          smooth={true}
          activeClass="active"
        >
          <li className="nav-item">Projects</li>
        </Link>
        <Link
          to="contact"
          spy={true}
          duration={500}
          smooth={true}
          activeClass="active"
        >
          <li className="nav-item">Contact</li>
        </Link>
      </ul>
    </div>
  );
}
