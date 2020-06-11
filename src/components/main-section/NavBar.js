import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import { bosYellow, mustardYellow } from '../../util/sharedStyles';

export default function NavBar() {
  return (
    <div>
      <NavContainer>
        <Link to="about" spy={true} duration={500}>
          <NavItem>About</NavItem>
        </Link>
        <Link to="projects" spy={true} duration={500}>
          <NavItem>Projects</NavItem>
        </Link>
        <Link to="contact" spy={true} duration={500}>
          <NavItem>Contact</NavItem>
        </Link>
      </NavContainer>
    </div>
  );
}

const NavContainer = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
`;

const NavItem = styled.li`
  padding: 10px 20px;
  position: relative;
  text-decoration: none;
  color: ${bosYellow};
  transition: all 0.3s ease-in;
  font-size: 1.5rem;
  font-weight: bold;

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: ${bosYellow};
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;
    transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;
  }

  :hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  :hover {
    color: ${bosYellow};
    font-weight: bold;
  }
`;

const Links = styled.a`
  text-decoration: none;
`;
