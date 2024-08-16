import React from "react";

const ProjectMask = ({ link, descLink, image, descImage, linkGit }) => {
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);
    const [isTablet, setIsTablet] = React.useState(window.innerWidth > 768 && window.innerWidth < 1000);
    const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 1000);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1000);
            setIsDesktop(window.innerWidth > 1000);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const imageStyle = {
        width: isMobile ? '60vw' : isTablet ? '50vw' : '30vw',
        height: isMobile ? '29vh' : isTablet ? '30vh' : '30vh',
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
