import { useRef, useEffect, useState } from 'react';

import ScrollArrow from '../../components/scroll-arrow/scroll-arrow';
import Navbar from '../../components/navbar/navbar';
import Main from '../../components/landing-page/landing-page';
import About from '../../components/about-page/about-page';
import Projects from '../../components/projects-page/projects-page';
import Contact from '../../components/contact-page/contact-page';


const MainPage: React.FC = () => {


  //Logic for Activating the Appropriate Navigation text
  const homeSectionRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const projectsSectionRef = useRef<HTMLDivElement | null>(null);
  const contactSectionRef = useRef<HTMLDivElement | null>(null);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (homeSectionRef.current && aboutSectionRef.current) {
        const homeTop = homeSectionRef.current.getBoundingClientRect().top;
        const aboutTop = aboutSectionRef.current.getBoundingClientRect().top;
        const projectsTop = projectsSectionRef.current?.getBoundingClientRect()?.top?? 0;
        const contactTop = contactSectionRef.current?.getBoundingClientRect()?.top ?? 0;

        // Check which section is closer to the top of the viewport
        if (Math.abs(homeTop) < Math.abs(aboutTop)) {
          setActiveSection('home');
        } else if (Math.abs(aboutTop) < Math.abs(projectsTop)) {
          setActiveSection('about');
        } else if (Math.abs(projectsTop) < Math.abs(contactTop)) {
          setActiveSection('projects');
        } else {
          setActiveSection('contact');
        }
      }
    };
    console.log(activeSection)
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  


// Logic for Scroll Arrow
  const aboutSection = useRef<HTMLDivElement>(null);
  const projectsSection = useRef<HTMLDivElement>(null);
  const contactSection = useRef<HTMLDivElement>(null);

  const scrollHandler = () => {
    if (activeSection == 'home') {
      aboutSection.current!.scrollIntoView({ behavior: 'smooth' });
    }
    else if (activeSection == 'about') {
      projectsSection.current!.scrollIntoView({ behavior: 'smooth' });
    }
    else if (activeSection == 'projects') {
      contactSection.current!.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Navbar activeSection={activeSection} />
      {/* Each section should be wrapped in a container */}

      {/* <ScrollArrow scrollToSection={scrollHandler} /> */}

      <div ref={homeSectionRef}  >
        <Main />
      </div>
      <ScrollArrow scrollToSection={scrollHandler} />
      <div ref={aboutSectionRef} >
        <div ref={aboutSection}>
          <About />
        </div>
      </div>
      <div ref={projectsSectionRef}>
        <div ref={projectsSection} >
          <Projects />
        </div>
      </div>

      <div ref={contactSectionRef}>
        <div ref={contactSection}>
          <Contact />
        </div>
      </div>
    </div>

  );
}
export default MainPage