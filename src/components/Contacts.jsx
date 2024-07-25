import React from "react";

const Contacts = () => {
    return(
        <div id="contacts" className="ContactWrapper">
            <a href="#contacts"><i id="arrow" class="fa-solid fa-chevron-down"></i></a>

            <h3>These are my socials:</h3>
            <div className="socials">
                <div className="connect">
                    <h4>Connect with me on Linkedin/Github!</h4><br />
                    <a href="https://www.linkedin.com/in/pabllo-cristian-f-a926062b3/"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://www.github.com/IkPc"><i class="fa-brands fa-github"></i></a>
                </div>
                <div className="email">
                    <h4>Send me an email</h4><br />
                    <a href="mailto:pabllo.dev@gmail.com"><i class="fa-solid fa-envelope"></i></a>
                </div>
            </div>
            <h3 id="bottom">Thanks for your time!</h3>
        </div>
    )
}

export default Contacts;