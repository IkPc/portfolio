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
                <a href="#about"><i className="fa-solid fa-circle-question"></i> About</a>
                <a href="#projects"><i className="fa-solid fa-briefcase"></i> Projects</a>
                <a href="#contacts"><i className="fa-solid fa-phone"></i> Contacts</a>
            </div>
        </nav>
    );
}

export default Header;
