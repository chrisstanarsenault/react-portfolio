import React from 'react';

import '../../styles/main-section/Main.scss';

import About from './About';
import Projects from './Projects';
import NavBar from './NavBar';
import Contact from './Contact';
import ButtonToTop from './ButtonToTop';

export default function Main() {
  return (
    <div className="main-container">
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <ButtonToTop />
    </div>
  );
}
