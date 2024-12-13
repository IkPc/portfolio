import React from "react";
import Header from '../components/1. Header/Header';
import Home from '../components/2. Home/Home';
import About from '../components/3. About/About';
import './Hpage.css';
import Projects from "../components/4. Projects/Projects";
import Footer from "../components/5. Footer/Footer";
import 'animate.css';

const Homepage = () => {
    return(
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Home />
                <About />
                <Projects />
            </main>
            <footer>
                <Footer />
            </footer>
            
        </div>
    )
}

export default Homepage;