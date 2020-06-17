import React from 'react';

import '../../styles/main-section/Main.scss';

import About from './About';
import Projects from './Projects';
import NavBar from './NavBar';
import Contact from './Contact';
import ButtonToTop from './ButtonToTop';
import Toolbox from './Toolbox';

export default function Main() {
  return (
    <div className="main-container">
      <NavBar />
      <About />
      <Toolbox />
      <Projects />
      <Contact />
      <ButtonToTop />
    </div>
  );
}
