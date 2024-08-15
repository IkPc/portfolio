import React from "react";
import img from '../assets/images/photoimg.png';

const Home = () => {
    return(
        <div className="homecontainer">
            <div id="home">
                <div className="left">
                    <img src={img} alt="character"/>
                </div>
                <div className="right">
                    <h1 id="name"><span>Hey there!</span> I'm </h1><br/>
                    <h1 id="work">I'm a <label>Front-End <span>Developer</span></label></h1>
                </div>
                <div id="button">
                    <a tabindex="4" href="mailto:pabllo.dev@gmail.com?subject=Work%20Opportunity"><i class="fa-solid fa-envelope" style={{verticalAlign: 'middle'}}></i> CONTACT ME</a>
                </div>
            </div>
        </div>
    )
}

export default Home;