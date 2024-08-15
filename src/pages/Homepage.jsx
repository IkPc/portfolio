import React from "react";
import Header from '../components/1. Header';
import Home from '../components/2. Home';
import About from '../components/3. About';
import './Hpage.css';
import Projects from "../components/4. Projects";
import Footer from "../components/5. Footer";
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