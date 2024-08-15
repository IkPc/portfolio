import React from "react";
import tailwind from "../assets/aboutme/TwIcon.png";
/*import scrollEvent from "../utils/scrollEvent";*/

const About = () => {
    /*const isVisible = scrollEvent();*/

    return (
        <div id="about" className="aboutcontainer">
            <a tabindex="5" href="#about"><i id="arrow" class="animate__animated animate__shakeY animate__delay-3s fa-solid fa-chevron-down"></i></a>
            {/*isVisible ? (*/
            <div className="about">
                <h1>About Me</h1>
                <h2>I'm a passionate developer with a love for Front-end. Here's a little bit about me:</h2>
                <p>I'm a 20-year-old web developer with around 2 years of experience. Recently graduated in Internet Systems, I'm currently pursuing a post-graduate course in FullStack Web Development while seeking opportunities to kickstart my career as a trainee.</p>
                <div className="Languages">
                    <h3><span><hr/></span>Languages/Tecnologies:</h3><br />
                    
                    <div title="Html" id="htmlWrapper" className="langs"><i id="html" className="fab fa-html5"></i></div>
                    <div title="Css" id="cssWrapper" className="langs"><i id="css" className="fa-brands fa-css3-alt"></i></div>
                    <div title="JavaScript" id="jsWrapper" className="langs"><i id="js" aria-hidden="true" className="fa-brands fa-square-js"></i></div>
                    <div title="React" id="reactWrapper" className="langs"><i id="react" className="fa-brands fa-react"></i></div>
                    <div title="Tailwind" id="tailwindWrapper" className="langs"><img src={tailwind} alt="tailwind" style={{height: 30, width: 50, paddingBottom: 20}}/></div>
                </div>
            </div>
            /*) : null*/}
        </div>
    );
}

export default About;
