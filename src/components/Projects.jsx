import React, { useState, useRef, useEffect } from 'react';
import ProjectMask from './ProjectMask';
import RQM from '../assets/projectsImages/Random Quote Machine.png';
import MP from '../assets/projectsImages/Markdown Previewer.png';
import DM from '../assets/projectsImages/Drum Machine.png';
import JC from '../assets/projectsImages/JavaScript Calculator.png';

const Projects = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slidesRef = useRef(null);
    const totalSlides = 4; 
    const visibleSlides = 2; 
    const offset = 100 / visibleSlides; 

    const handleNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const slides = slidesRef.current.children;
        const newTransform = -slideIndex * offset;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transform = `translateX(${newTransform}%)`;
        }
    }, [slideIndex]);

    return (
        <div className="projectContainer">
            <a href="#projects"><i id="arrow" className="fa-solid fa-chevron-down"></i></a>
            <div className="ProjectWrapper">
                <button className="buttonLeft" onClick={handlePrevSlide}>❮</button>
                <div id="projects" className="Projects" ref={slidesRef}>
                    <ProjectMask
                        link="https://ikpc.github.io/Random-Quote-Machine/"
                        descLink="Random Quote Machine Website"
                        image={RQM}
                        descImage="Random Quote Machine"
                        linkGit="https://github.com/IkPc/Random-Quote-Machine"
                    />
                    <ProjectMask
                        link="https://ikpc.github.io/Markdown-Previewer/"
                        descLink="Markdown Previewer Website"
                        image={MP}
                        descImage="Markdown Previewer"
                        linkGit="https://github.com/IkPc/Markdown-Previewer"
                    />
                    <ProjectMask
                        link="https://ikpc.github.io/Drum-Machine/"
                        descLink="Drum Machine Website"
                        image={DM}
                        descImage="Drum Machine"
                        linkGit="https://github.com/IkPc/Drum-Machine"
                    />
                    <ProjectMask
                        link="https://ikpc.github.io/javascript-calculator/"
                        descLink="Javascript Calculator Website"
                        image={JC}
                        descImage="Javascript Calculator"
                        linkGit="https://github.com/IkPc/javascript-calculator"
                    />
                </div>
                <button className="buttonRight" onClick={handleNextSlide}>❯</button>
            </div>
        </div>
    );
};

export default Projects;
