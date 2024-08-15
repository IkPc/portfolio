import React from "react";
import image from "../assets/icons/logo ikpc.png"

const Header = () => {
    return (
            <nav className="header">
                <div className="logo">
                    <a href="#home">
                        <img id="logo" src={image} alt="IkPc logo" />
                    </a>
                </div>
                <div className="nav-items">
                    <a tabindex="0" href="#about"><i className="fa-solid fa-circle-question"></i> <p id="mobileHeader" title="About me">About</p></a>
                    <a tabindex="1" href="#projects"><i className="fa-solid fa-briefcase"></i> <p id="mobileHeader" title="My projects">Projects</p></a>
                    <a tabindex="2" href="#Footer"><i class="fa-solid fa-people-arrows" style={{color: 'white'}}></i> <p id="mobileHeader" title="Contact me">Socials</p></a>
                </div>
            </nav>
    );
}

export default Header;
