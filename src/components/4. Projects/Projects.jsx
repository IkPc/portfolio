import React, { useEffect } from 'react';
import ProjectMask from './ProjectMask';
import RQM from '../../assets/projectsImages/Random Quote Machine.png';
import MP from '../../assets/projectsImages/Markdown Previewer.png';
import DM from '../../assets/projectsImages/Drum Machine.png';
import JC from '../../assets/projectsImages/JavaScript Calculator.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Projects.css';

const Projects = () => {
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,     
        });
    }, []);
    const projects = [
        {
            link: "https://ikpc.github.io/Random-Quote-Machine/",
            descLink: "Random Quote Machine Website",
            image: RQM, 
            descImage: "Random Quote Machine",
            linkGit: "https://github.com/IkPc/Random-Quote-Machine",
        },
        {
            link: "https://ikpc.github.io/Markdown-Previewer/",
            descLink: "Markdown Previewer Website",
            image: MP, 
            descImage: "Markdown Previewer",
            linkGit: "https://github.com/IkPc/Markdown-Previewer",
        },
        {
            link: "https://ikpc.github.io/Drum-Machine/",
            descLink: "Drum Machine Website",
            image: DM, 
            descImage: "Drum Machine",
            linkGit: "https://github.com/IkPc/Drum-Machine",
        },
        {
            link: "https://ikpc.github.io/javascript-calculator/",
            descLink: "Javascript Calculator Website",
            image: JC, 
            descImage: "Javascript Calculator",
            linkGit: "https://github.com/IkPc/javascript-calculator",
        },
    ];

    return (
        <div id="projects" className="projectContainer">
            <a tabIndex="0" href="#projects">
                <i id="arrow" className="fa-solid fa-chevron-down"></i>
            </a>
            <div className="ProjectWrapper" data-aos="fade-up">
                <h3>My Projects:</h3>
                <ProjectMask projects={projects} />
            </div>
        </div>
    );
};

export default Projects;
