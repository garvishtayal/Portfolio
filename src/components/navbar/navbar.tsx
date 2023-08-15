import { useState } from 'react';
import './navbar.css';

const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      toggleMenu(); // Close the menu after clicking a link
    }
  };

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>

      {/* Left */}
      <div className="navbar-brand">
        <span className="name">Abhishek</span>
      </div>

      {/* Toogle (for small screen)*/}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-icon"></span>
      </div>

      {/* Navigation Section */}
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <div className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollToSection('home-page')}>
          Home
        </div>
        <div className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about-page')}>
          About
        </div>
        <div className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects-page')}>
          Projects
        </div>
        <div className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact-page')}>
          Contact
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
