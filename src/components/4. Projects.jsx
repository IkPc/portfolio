import React, { useState, useRef, useEffect } from 'react';
import ProjectMask from './4.1 ProjectMask';
import RQM from '../assets/projectsImages/Random Quote Machine.png';
import MP from '../assets/projectsImages/Markdown Previewer.png';
import DM from '../assets/projectsImages/Drum Machine.png';
import JC from '../assets/projectsImages/JavaScript Calculator.png';

const Projects = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const slidesRef = useRef(null);
    const totalSlides = 4;
    const visibleSlides = 3;
    const offsetDesktop = 300 / visibleSlides;
    const offsetMobile = 100;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleNextSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const handlePrevSlide = () => {
        setSlideIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const slides = slidesRef.current.children;
        const offset = isMobile ? offsetMobile : offsetDesktop;
        const newTransform = -slideIndex * offset;

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.transition = 'transform 0.5s ease-in-out';
            slides[i].style.transform = `translateX(${newTransform}%)`;
        }
    }, [slideIndex, isMobile]);

    return (
        <div id="projects" className="projectContainer">
            <a tabindex="6" href="#projects"><i id="arrow" className="fa-solid fa-chevron-down"></i></a>
            <h3>My Projects:</h3>
            <div className="ProjectWrapper">
                <button className="buttonLeft" onClick={handlePrevSlide}>❮</button>
                <div className="Projects" ref={slidesRef}>
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
