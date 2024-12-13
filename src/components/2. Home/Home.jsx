import React from "react";
import img from '../../assets/images/photoimg.png';
import './Home.css';

const Home = () => {
    return(
        <div className="homecontainer">
            <div id="home">
                <div className="left">
                    <img src={img} alt="character"/>
                </div>
                <div className="right">
                    <h1 id="name">Hey there! I'm <span>Pabllo Cristian</span></h1>
                    <h1 id="work"><label>I'm a Front-End <span>Developer</span></label></h1>
                </div>
                <div id="button">
                    <a tabIndex="0" href="mailto:pabllo.dev@gmail.com?subject=Work%20Opportunity"><i className="fa-solid fa-envelope tab" style={{verticalAlign: 'middle'}}></i> CONTACT ME</a>
                </div>
            </div>
        </div>
    )
}

export default Home;