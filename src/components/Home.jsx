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
                    <h1 id="name">{"`"}Hey, I'm </h1><h1 id="nick">also known as {"${"}<i>IkPc</i>{"}`"}</h1>
                        
                    <h1 id="work">I'm a <i><u>Front-End Developer</u></i></h1>
                </div>
            </div>
        </div>
    )
}

export default Home;