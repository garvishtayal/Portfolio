import { useRef, useEffect, useState } from 'react';
import Navbar from '../navbar/navbar';
import styles from './landing-page.module.css';

function Main() {

//Logic for Activating the Appropriate Navigation text
  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  // ... Add refs for other sections

  // Your scroll position state
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (homeSectionRef.current && aboutSectionRef.current) {
        const homeTop = homeSectionRef.current.getBoundingClientRect().top;
        const aboutTop = aboutSectionRef.current.getBoundingClientRect().top;
        
        // Check which section is closer to the top of the viewport
        if (Math.abs(homeTop) < Math.abs(aboutTop)) {
          setActiveSection('home');
        } else {
          setActiveSection('about');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
  return (
    <div className={styles.main_container} id='home-page'>
      <Navbar activeSection={activeSection} />
      <div className={styles.middle}>
        <div ref={homeSectionRef} className={styles.name}>
          Abhishek Tayal
        </div>
        <div ref={aboutSectionRef} className={styles.short_note}>
          Branding | Design | Development | Vision
        </div>
      </div>
    </div>
  );
}

export default Main;
