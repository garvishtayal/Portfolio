import './about-page.css';
import profilePic from '/profile_1.jpg';


function About() {

  return (
    <div className='main_container' id='about-page'>
      <div className="bio-container">
      <div className="profile-img-container">
        <img className="profile-img" src={profilePic} />
      </div>
      <div className="bio-content">
        <h1 className="bio-name">Abhishek Tayal</h1>
        <p className="role">Full Stack Developer</p>
        <p className="quote">
          "Building something doesn't require knowing everything beforehand; as you begin the journey, understanding unfolds gradually."
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Frontend: HTML, CSS, JavaScript, TypeScript, React, TailwindCSS</li>
          <li>Backend: Node.js, Express, RESTful API, JWT</li>
          <li>Databases: MongoDB</li>
          <li>Version Control: Git, GitHub</li>
        </ul>
      </div>
    </div>
    </div>

  );
}

export default About;