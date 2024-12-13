import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const ProjectMask = ({ projects }) => {
  // Swiper carousel settings
  const settings = {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true, 
    breakpoints: {
      1500: {
        slidesPerView: 3, // Show 2 items on larger desktops
      },
      1000: {
        slidesPerView: 2, // Show 2 items on larger desktops
      },
      0: {
        slidesPerView: 1, // Show 1 item on tablets and smaller screens
      },
    },
  };

  // Image style
  const imageStyle = {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  };

  const buttonStyle = {
    left: "5%",
    bottom: "2%",
  }

  return (
    <div className="swiper-container grid">
      <Swiper {...settings}>
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="mask">
              <a href={project.link} alt={project.descLink}>
                <h1 style={{fontSize: "1rem", height: "20px"}}>{project.descImage}</h1>
                <img
                  id="projectImage"
                  src={project.image}
                  style={imageStyle}
                  alt={project.descImage}
                  title={project.descImage}
                />
                <button
                  onClick={() => window.open(project.linkGit, "_blank")}
                  alt="Github repository"
                  title="Github repository"
                  style={buttonStyle}
                ><i className="fa-brands fa-github small"></i></button>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectMask;
