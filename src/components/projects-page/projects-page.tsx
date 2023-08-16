import { useState } from 'react';
import './projects-page.css';
import p11 from '/p11.png';
import p12 from '/p12.png';
import p21 from '/p21.png';
import p22 from '/p22.png';
import p23 from '/p23.png';
import p31 from '/p31.png';
import p32 from '/p32.png';


function Projects() {
  const projects = [
    {
      title: 'PodMate',
      description: `PodMate: Your Gateway to Captivating Video Podcasts and Creative Expression!

Escape the Reels: Dive into the Podcasting Universe - Where Creativity Reigns!`, 
      images: [p11, p12],
      status: 'In Development',
    },
    {
      title: 'NotCode',
      description:
        `Notcode: Ignite Your Coding Skills! Unleash Your Potential with LeetCode-Inspired Challenges.`,
      images: [p21, p22, p23],
      status: 'Completed',
    },
    {
      title: 'Twitter Clone',
      description:
        `Recreate Twitter's Essence Using Vanilla HTML and CSS. Dive into a world of design and interactivity, crafting your own Twitter-like platform from the ground up.`,
      images: [ p31, p32],
      status: 'Completed',
    }
  ];

  const ProjectPage = () => {
    const [currentProject, setCurrentProject] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);

    const prevProject = () => {
      setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
      setCurrentImage(0);
    };

    const nextProject = () => {
      setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
      setCurrentImage(0);
    };

    const prevImage = () => {
      setCurrentImage((prev) => (prev === 0 ? projects[currentProject].images.length - 1 : prev - 1));
    };

    const nextImage = () => {
      setCurrentImage((prev) => (prev === projects[currentProject].images.length - 1 ? 0 : prev + 1));
    };

    const currentProjectData = projects[currentProject];

    return (
      <div className='main-container' id='projects-page'>
        <div className="project-container">
          <div className="project-item">
            <div className="project-images">
              <img src={currentProjectData.images[currentImage]} alt={`Project ${currentProject}`} />
              <div className="arrow-buttons">
                <button className="arrow-button prev" onClick={prevImage}>
                  &lt;
                </button>
                <button className="arrow-button next" onClick={nextImage}>
                  &gt;
                </button>
              </div>
            </div>
            <div className="project-details">
              <h2>{currentProjectData.title}</h2>
              <p className='break'>{currentProjectData.description}</p>
              <p className='status'>Status: {currentProjectData.status}</p>
            </div>
          </div>
          <div className="project-navigation">
            <button className="arrow-button prev" onClick={prevProject}>
              &lt;
            </button>
            <button className="arrow-button next" onClick={nextProject}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    );
  };

  return <ProjectPage />;
}

export default Projects;
