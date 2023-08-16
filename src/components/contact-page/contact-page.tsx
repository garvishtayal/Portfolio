import './contact-page.css';
import { useState } from 'react';

function Contact() {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const toggleEmail = () => {
    setShowEmail(!showEmail);
    setShowPhone(false);
  };

  const togglePhone = () => {
    setShowPhone(!showPhone);
    setShowEmail(false);
  };


  return (
    <div className="mainContainer" id='contact-page'>
<div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/abhishek-tayal-676a30217" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/garvishtayal" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="#!" onClick={toggleEmail}>
          <i className="fas fa-envelope"></i>
        </a>
        <a href="#!" onClick={togglePhone}>
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
      {showEmail && <p className="contact-details">Email: garvishtayal@gmail.com</p>}
      {showPhone && <p className="contact-details">Phone: +91 8708580072</p>}
      <p className="designed-by">Designed and Developed by Abhishek Tayal</p>
    </div>
    </div>

  );
}

export default Contact;