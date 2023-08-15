import React, { useRef, useEffect, useState } from 'react';
import ScrollArrow from '../../components/scroll-arrow/scroll-arrow';
import Main from '../../components/landing-page/landing-page';
import About from '../../components/about-page/about-page';
import Projects from '../../components/projects-page/projects-page';
import Contact from '../../components/contact-page/contact-page';

const MainPage: React.FC = () => {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Main/>
      <ScrollArrow scrollToSection={scrollToAbout} />
      <div ref={aboutSectionRef}>
      <About />

      <Projects />

      <Contact />
      </div>
    </div>
  );
};

export default MainPage;
