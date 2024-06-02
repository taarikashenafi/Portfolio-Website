import React from 'react';
import './ProjectsPage.css';
import TypingAnimation from './TypingAnimation';

const ProjectsPage = () => {
    return (
        <section id="projects" className="projects-page">
            <TypingAnimation text="Projects" />
            <p>Helping you make the right decision.</p>
            <div className="project">
                <div className="project-info green">
                    <h2>Project 1</h2>
                    <p>Description about project 1...</p>
                    <a href="https://project1.netlify.app" target="_blank" rel="noopener noreferrer"><button>View Project</button></a>
                </div>
                <div className="project-image">
                    <img src="project1.jpg" alt="Project 1" />
                </div>
            </div>
            <div className="project">
                <div className="project-info">
                    <h2>Project 2</h2>
                    <p>Description about project 2...</p>
                    <a href="https://project2.netlify.app" target="_blank" rel="noopener noreferrer"><button>View Project</button></a>
                </div>
                <div className="project-image">
                    <img src="project2.jpg" alt="Project 2" />
                </div>
            </div>
            <div className="project">
                <div className="project-info">
                    <h2>Project 3</h2>
                    <p>Description about project 3...</p>
                    <a href="https://project3.netlify.app" target="_blank" rel="noopener noreferrer"><button>View Project</button></a>
                </div>
                <div className="project-image">
                    <img src="project3.jpg" alt="Project 3" />
                </div>
            </div>
        </section>
    );
};

export default ProjectsPage;