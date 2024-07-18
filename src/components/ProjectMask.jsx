import React from "react";

const ProjectMask = ({link, descLink, image, descImage, linkGit}) => {
    return(
        <div className="mask">
            <a href={link} alt={descLink}>
                <img src={image} style={{width: '30vw', height: '30vh'}} alt={descImage}/>
                <a href={linkGit} alt="Github repository">
                    <i class="fa-brands fa-github"></i>
                </a>
            </a>
        </div>
    )
};

export default ProjectMask;