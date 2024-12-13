import React, { useEffect } from "react";
import tailwind from "../../assets/aboutme/TwIcon.png";
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

    return (
        <div id="about" className="aboutcontainer">
            <a tabIndex="0" href="#about"><i id="arrow" className="animate__animated animate__shakeY animate__delay-3s fa-solid fa-chevron-down"></i></a>
            <div className="about" data-aos="fade-up">
                <h1>About Me</h1>
                <h2>I'm a passionate developer with a love for Front-end. Here's a little bit about me:</h2>
                <p>I'm a 20-year-old web developer with around 2 years of experience. Recently graduated in Internet Systems, I'm currently pursuing a post-graduate course in FullStack Web Development while seeking opportunities to kickstart my career as a trainee.</p>
                <hr/>
                <div className="Languages" data-aos="fade-up">
                    <h3>Languages/Technologies:</h3>
                    
                    <div title="Html" id="htmlWrapper" className="langs"><i id="html" className="fab fa-html5"></i></div>
                    <div title="Css" id="cssWrapper" className="langs"><i id="css" className="fa-brands fa-css"></i></div>
                    <div title="JavaScript" id="jsWrapper" className="langs"><i id="js" aria-hidden="true" className="fa-brands fa-square-js"></i></div>
                    <div title="React" id="reactWrapper" className="langs"><i id="react" className="fa-brands fa-react"></i></div>
                    <div title="Tailwind" id="tailwindWrapper" className="langs"><img src={tailwind} alt="tailwind" className="tw"/></div>
                </div>
            </div>
        </div>
    );
}

export default About;
