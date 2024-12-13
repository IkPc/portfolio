import React from "react";
import image from "../../assets/icons/logo ikpc.png"
import './Header.css';

const Header = () => {
    return (
            <nav className="header">
                <a href="#home" className="logo"><img id="logo" src={image} alt="IkPc logo" /></a>
                <div className="nav-items">
                    <a tabIndex="0" href="#about"><i className="fa-solid fa-circle-question"></i> <p id="mobileHeader" title="About me">About</p></a>
                    <a tabIndex="0" href="#projects"><i className="fa-solid fa-briefcase"></i> <p id="mobileHeader" title="My projects">Projects</p></a>
                    <a tabIndex="0" href="#Footer"><i className="fa-solid fa-people-arrows" style={{color: 'white'}}></i> <p id="mobileHeader" title="Contact me">Socials</p></a>
                </div>
            </nav>
    );
}

export default Header;
