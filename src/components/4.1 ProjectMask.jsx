import React from "react";

const ProjectMask = ({ link, descLink, image, descImage, linkGit }) => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageStyle = {
        width: isMobile ? '80vw' : '28vw',
        height: isMobile ? '29vh' : '30vh',
    };

    return (
        <div className="mask">
            <a href={link} alt={descLink}>
                <img
                    id="projectImage"
                    src={image}
                    style={imageStyle}
                    alt={descImage}
                    title={descImage}
                />
                <a href={linkGit} alt="Github repository" title="Github repository">
                    <i className="fa-brands fa-github"></i>
                </a>
            </a>
        </div>
    );
};

export default ProjectMask;
