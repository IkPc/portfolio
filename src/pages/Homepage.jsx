import React from "react";
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import './Hpage.css';
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";

const Homepage = () => {
    return(
        <div>
            <Header />
            <Home />
            <About />
            <Projects />
            <Contacts />
        </div>
    )
}

export default Homepage;