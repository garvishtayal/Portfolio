import './about-page.css';

function About() {

  return (
    <div className='main_container' id='about-page'>
      <div className="bio-container">
      <div className="profile-img-container">
        <img className="profile-img" src='/profile_1.jpg' />
      </div>
      <div className="bio-content">
        <h1 className="bio-name">Abhishek Tayal</h1>
        <p className="role">Full Stack Developer</p>
        <p className="quote">
          "When something is good enough, you do it. No matter what the odds are."
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