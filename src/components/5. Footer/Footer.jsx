import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer id="Footer" className="FooterWrapper">
            <h3>Socials:</h3>
            <div className="socials">
                <a title="Connect with me on linkedin!" href="https://www.linkedin.com/in/pabllo-cristian-f-a926062b3/">
                    <i className="animate__animated animate__backInLeft fa-brands fa-linkedin"></i>
                </a>
                <a title="See what I'm currently working on" href="https://www.github.com/IkPc">
                    <i className="animate__animated animate__backInUp fa-brands fa-github"></i>
                </a>
                <a title="Send me an E-mail!" href="mailto:pabllo.dev@gmail.com">
                    <i className="animate__animated animate__backInRight fa-solid fa-envelope"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
